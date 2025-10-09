import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { HistorialDocumento } from "../domain/historialDocumento.entity";

type OrdenColumna = "ID_historial" | "documento_historial" | "created_at" | "estado" | "usuario";
type DireccionOrden = "asc" | "desc";

export function useTableHistorialDocumento({
  historiales,
}: {
  historiales: HistorialDocumento[];
}) {
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const [ordenColumna, setOrdenColumna] = useState<OrdenColumna | null>(null);
  const [direccionOrden, setDireccionOrden] = useState<DireccionOrden>("asc");
  const [modalVer, setModalVer] = useState(false);
  const [historialSeleccionado, setHistorialSeleccionado] = useState<HistorialDocumento | null>(null);
  const elementosPorPagina = 5;

  // Función para cambiar el ordenamiento
  const handleOrdenar = (columna: OrdenColumna) => {
    if (ordenColumna === columna) {
      setDireccionOrden(direccionOrden === "asc" ? "desc" : "asc");
    } else {
      setOrdenColumna(columna);
      setDireccionOrden("asc");
    }
  };

  // Filtrar y ordenar historiales
  const historialesFiltradosYOrdenados = useMemo(() => {
    let resultado = [...historiales];

    // Filtrar según búsqueda
    if (busqueda.trim()) {
      const busquedaLower = busqueda.toLowerCase();
      resultado = resultado.filter(
        (hist) =>
          hist.documento_historial?.toLowerCase().includes(busquedaLower) ||
          hist.ID_historial?.toString().includes(busquedaLower) ||
          hist.estado?.estado?.toLowerCase().includes(busquedaLower) ||
          hist.usuario?.nombre?.toLowerCase().includes(busquedaLower) ||
          hist.usuario?.apellido?.toLowerCase().includes(busquedaLower)
      );
    }

    // Ordenar
    if (ordenColumna) {
      resultado.sort((a, b) => {
        let valorA: any;
        let valorB: any;

        switch (ordenColumna) {
          case "ID_historial":
            valorA = a.ID_historial;
            valorB = b.ID_historial;
            break;
          case "documento_historial":
            valorA = a.documento_historial?.toLowerCase() || "";
            valorB = b.documento_historial?.toLowerCase() || "";
            break;
          case "created_at":
            valorA = new Date(a.created_at || "").getTime();
            valorB = new Date(b.created_at || "").getTime();
            break;
          case "estado":
            valorA = a.estado?.estado?.toLowerCase() || "";
            valorB = b.estado?.estado?.toLowerCase() || "";
            break;
          case "usuario":
            valorA = `${a.usuario?.nombre || ""} ${a.usuario?.apellido || ""}`.toLowerCase();
            valorB = `${b.usuario?.nombre || ""} ${b.usuario?.apellido || ""}`.toLowerCase();
            break;
          default:
            return 0;
        }

        if (valorA < valorB) return direccionOrden === "asc" ? -1 : 1;
        if (valorA > valorB) return direccionOrden === "asc" ? 1 : -1;
        return 0;
      });
    }

    return resultado;
  }, [historiales, busqueda, ordenColumna, direccionOrden]);

  // Calcular historiales paginados
  const historialesPaginados = useMemo(() => {
    const inicio = (paginaActual - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;
    return historialesFiltradosYOrdenados.slice(inicio, fin);
  }, [historialesFiltradosYOrdenados, paginaActual, elementosPorPagina]);

  // Resetear página cuando cambia la búsqueda u ordenamiento
  useEffect(() => {
    setPaginaActual(1);
  }, [busqueda, ordenColumna, direccionOrden]);

  return {
    historialesFiltradosYOrdenados,
    historialesPaginados,
    busqueda,
    paginaActual,
    elementosPorPagina,
    ordenColumna,
    direccionOrden,
    historialSeleccionado,
    setHistorialSeleccionado,
    setBusqueda,
    setPaginaActual,
    handleOrdenar,
    modalVer,
    setModalVer,
  };
}