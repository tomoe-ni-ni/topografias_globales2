import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Documento, DocumentoFormEdit } from "../domain/documentos.entity";
import {
  obtenerDocumentos,
  eliminaDocumento,
  actualizarDocumento,
} from "../domain/documentos.usecase";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  editDocumentoSchema,
  EditDocumentoSchema,
} from "@/zod/schemas/documentos/documentoEditar.schema";

export function useTableDocumento({
  documentos,
  setDocumentos,
}: {
  documentos: Documento[];
  setDocumentos: Dispatch<SetStateAction<Documento[]>>;
}) {
  const { data: session } = useSession();
  const [documentosFiltrados, setDocumentosFiltrados] = useState<Documento[]>(
    []
  );
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const [openEliminarDialog, setOpenEliminarDialog] = useState(false);
  const [modalVer, setModalVer] = useState(false);
  const [modalAbiertoEditar, setModalAbiertoEditar] = useState(false);

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

  const eliminarDocumento = async () => {
    console.log(
      "Eliminar documento con ID:",
      documentoSeleccionado?.ID_documento
    );

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
    console.log(formEditar.getValues());

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
    documentosFiltrados,
    busqueda,
    paginaActual,
    documentoSeleccionado,
    setDocumentoSeleccionado,
    setBusqueda,
    setPaginaActual,
    setDocumentosFiltrados,
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
