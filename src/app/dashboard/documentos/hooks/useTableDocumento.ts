import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Documento } from "../domain/documentos.entity";
import { obtenerDocumentos } from "../domain/documentos.usecase";

export function useTableDocumento() {
  const { data: session } = useSession();
  const [documentos, setDocumentos] = useState<Documento[]>([]);
  const [documentosFiltrados, setDocumentosFiltrados] = useState<Documento[]>(
    []
  );
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [documentoSeleccionado, setDocumentoSeleccionado] =
    useState<Documento | null>(null);
    useEffect(() => {
        if (session?.user.ID_usuario) {
          obtenerDocumentos()
        }
      }, [session?.user.ID_usuario]);
      
  return {
    documentos,
    documentosFiltrados,
    busqueda,
    paginaActual,
    modalEliminar,
    modalEditar,
    documentoSeleccionado,
    setModalEliminar,
    setModalEditar,
    setDocumentoSeleccionado,
    setBusqueda,
    setPaginaActual,
    setDocumentosFiltrados,
    setDocumentos,
  };
}
