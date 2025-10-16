import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { HistorialDocumento } from "../domain/historialDocumento.entity";
import { eliminaHistorialDocumento } from "../domain/historialDocumento.usecase";

type OrdenColumna =
  | "ID_historial"
  | "documento_historial"
  | "created_at"
  | "estado"
  | "usuario";
type DireccionOrden = "asc" | "desc";

export function useTableHistorialDocumento({
  historiales,
  setHistoriales,
}: {
  historiales: HistorialDocumento[];
  setHistoriales: Dispatch<SetStateAction<HistorialDocumento[]>>;
}) {
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const [ordenColumna, setOrdenColumna] = useState<OrdenColumna | null>(null);
  const [direccionOrden, setDireccionOrden] = useState<DireccionOrden>("asc");
  const [modalVer, setModalVer] = useState(false);
  const [openEliminarDialog, setOpenEliminarDialog] = useState(false);
  const [cargandoUrl, setCargandoUrl] = useState(false);
  const [historialSeleccionado, setHistorialSeleccionado] =
    useState<HistorialDocumento | null>(null);
  const elementosPorPagina = 5;

  const handleOrdenar = (columna: OrdenColumna) => {
    if (ordenColumna === columna) {
      setDireccionOrden(direccionOrden === "asc" ? "desc" : "asc");
    } else {
      setOrdenColumna(columna);
      setDireccionOrden("asc");
    }
  };

  const historialesFiltradosYOrdenados = useMemo(() => {
    let resultado = [...historiales];

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
            valorA = `${a.usuario?.nombre || ""} ${
              a.usuario?.apellido || ""
            }`.toLowerCase();
            valorB = `${b.usuario?.nombre || ""} ${
              b.usuario?.apellido || ""
            }`.toLowerCase();
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

  const historialesPaginados = useMemo(() => {
    const inicio = (paginaActual - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;
    return historialesFiltradosYOrdenados.slice(inicio, fin);
  }, [historialesFiltradosYOrdenados, paginaActual, elementosPorPagina]);

  useEffect(() => {
    setPaginaActual(1);
  }, [busqueda, ordenColumna, direccionOrden]);

  const eliminarHistorial = async () => {
    if (!historialSeleccionado?.ID_historial) return;

    try {
      await eliminaHistorialDocumento(historialSeleccionado.ID_historial);
      setHistoriales(
        historiales.filter(
          (hist) => hist.ID_historial !== historialSeleccionado.ID_historial
        )
      );
      setOpenEliminarDialog(false);
    } catch (error) {
      console.error("Error al eliminar el historial:", error);
    }
  };

  const verDocumento = async (path: string) => {
    if (!path) {
      alert("No hay archivo disponible");
      return;
    }

    setCargandoUrl(true);
    try {
      const response = await fetch(
        `/api/storage/signed-url/${encodeURIComponent(path)}?time=3600`
      );

      if (!response.ok) {
        throw new Error("Error al generar URL del documento");
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      window.open(data.url, "_blank");
    } catch (error: any) {
      console.error("Error al abrir documento:", error);
      alert("Error al abrir el documento: " + error.message);
    } finally {
      setCargandoUrl(false);
    }
  };

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
    openEliminarDialog,
    setOpenEliminarDialog,
    eliminarHistorial,
    verDocumento,
    cargandoUrl,
  };
}