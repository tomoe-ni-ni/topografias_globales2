import {
  editDocumentoSchema,
  EditDocumentoSchema,
} from "@/zod/schemas/documentos/documentoEditar.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Documento, DocumentoFormEdit } from "../domain/documentos.entity";
import {
  actualizarDocumento,
  eliminaDocumento,
  obtenerDocumentos,
} from "../domain/documentos.usecase";

type OrdenColumna = "ID_documento" | "nombre_documento" | "estado" | "tipo_documento" | "cliente";
type DireccionOrden = "asc" | "desc";

export function useTableDocumento({
  documentos,
  setDocumentos,
}: {
  documentos: Documento[];
  setDocumentos: Dispatch<SetStateAction<Documento[]>>;
}) {
  const { data: session } = useSession();
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const [openEliminarDialog, setOpenEliminarDialog] = useState(false);
  const [modalVer, setModalVer] = useState(false);
  const [modalAbiertoEditar, setModalAbiertoEditar] = useState(false);
  const [ordenColumna, setOrdenColumna] = useState<OrdenColumna | null>(null);
  const [direccionOrden, setDireccionOrden] = useState<DireccionOrden>("asc");
  const elementosPorPagina = 5;

  const [documentoSeleccionado, setDocumentoSeleccionado] =
    useState<Documento | null>(null);

  const formEditar = useForm<EditDocumentoSchema>({
    resolver: zodResolver(editDocumentoSchema),
    defaultValues: {
      nombre_documento: documentoSeleccionado?.nombre_documento || "",
      folio: documentoSeleccionado?.folio || "",
      descripcion: documentoSeleccionado?.descripcion || "",
    },
  });

  useEffect(() => {
    if (session?.user.ID_usuario) {
      obtenerDocumentos();
    }
  }, [session?.user.ID_usuario]);

  // Función para cambiar el ordenamiento
  const handleOrdenar = (columna: OrdenColumna) => {
    if (ordenColumna === columna) {
      // Si es la misma columna, cambiar dirección
      setDireccionOrden(direccionOrden === "asc" ? "desc" : "asc");
    } else {
      // Nueva columna, ordenar ascendente
      setOrdenColumna(columna);
      setDireccionOrden("asc");
    }
  };

  // Filtrar y ordenar documentos
  const documentosFiltradosYOrdenados = useMemo(() => {
    let resultado = [...documentos];

    // Filtrar según búsqueda
    if (busqueda.trim()) {
      const busquedaLower = busqueda.toLowerCase();
      resultado = resultado.filter(
        (doc) =>
          doc.nombre_documento?.toLowerCase().includes(busquedaLower) ||
          doc.ID_documento?.toString().includes(busquedaLower) ||
          doc.cliente?.nombre?.toLowerCase().includes(busquedaLower) ||
          doc.cliente?.apellido?.toLowerCase().includes(busquedaLower)
      );
    }

    // Ordenar
    if (ordenColumna) {
      resultado.sort((a, b) => {
        let valorA: any;
        let valorB: any;

        switch (ordenColumna) {
          case "ID_documento":
            valorA = a.ID_documento;
            valorB = b.ID_documento;
            break;
          case "nombre_documento":
            valorA = a.nombre_documento?.toLowerCase() || "";
            valorB = b.nombre_documento?.toLowerCase() || "";
            break;
          case "estado":
            valorA = a.estado?.estado?.toLowerCase() || "";
            valorB = b.estado?.estado?.toLowerCase() || "";
            break;
          case "tipo_documento":
            valorA = a.tipo_documento?.toLowerCase() || "";
            valorB = b.tipo_documento?.toLowerCase() || "";
            break;
          case "cliente":
            valorA = `${a.cliente?.nombre || ""} ${a.cliente?.apellido || ""}`.toLowerCase();
            valorB = `${b.cliente?.nombre || ""} ${b.cliente?.apellido || ""}`.toLowerCase();
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
  }, [documentos, busqueda, ordenColumna, direccionOrden]);

  // Calcular documentos paginados
  const documentosPaginados = useMemo(() => {
    const inicio = (paginaActual - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;
    return documentosFiltradosYOrdenados.slice(inicio, fin);
  }, [documentosFiltradosYOrdenados, paginaActual, elementosPorPagina]);

  // Resetear página cuando cambia la búsqueda u ordenamiento
  useEffect(() => {
    setPaginaActual(1);
  }, [busqueda, ordenColumna, direccionOrden]);

  const eliminarDocumento = async () => {
    if (!documentoSeleccionado?.ID_documento) return;

    try {
      await eliminaDocumento(documentoSeleccionado.ID_documento);
      setDocumentos(
        documentos.filter(
          (doc) => doc.ID_documento !== documentoSeleccionado.ID_documento
        )
      );
      setOpenEliminarDialog(false);
    } catch (error) {
      console.error("Error al eliminar el documento:", error);
    }

    return () => {};
  };

  const editarDocumento = async () => {
    if (!documentoSeleccionado?.ID_documento) return;

    const documento: DocumentoFormEdit = {
      ...formEditar.getValues(),
      ID_documento: documentoSeleccionado.ID_documento,
    };

    try {
      const documentoActualizado = await actualizarDocumento(documento);
      setDocumentos((prev) =>
        prev.map((doc) =>
          doc.ID_documento === documentoSeleccionado?.ID_documento
            ? { ...doc, ...documentoActualizado }
            : doc
        )
      );
      formEditar.reset();
      setModalAbiertoEditar(false);
    } catch (error) {
      console.error("Error al editar el documento:", error);
    }
  };

  return {
    documentosFiltradosYOrdenados,
    documentosPaginados,
    busqueda,
    paginaActual,
    elementosPorPagina,
    ordenColumna,
    direccionOrden,
    documentoSeleccionado,
    setDocumentoSeleccionado,
    setBusqueda,
    setPaginaActual,
    handleOrdenar,
    openEliminarDialog,
    setOpenEliminarDialog,
    eliminarDocumento,
    modalVer,
    setModalVer,
    modalAbiertoEditar,
    setModalAbiertoEditar,
    editarDocumento,
    formEditar,
  };
}