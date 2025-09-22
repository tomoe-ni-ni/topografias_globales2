import { TipoDocumento } from "@/enums";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Documento, DocumentoForm } from "../domain/documentos.entity";
import {
  crearDocumento,
  obtenerDocumentos,
} from "../domain/documentos.usecase";

export function useDocumento() {
  const { data: session } = useSession();
  const [documentos, setDocumentos] = useState<Documento[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [form, setForm] = useState<DocumentoForm>({
    nombre_documento: "",
    tipo_documento: TipoDocumento.planos,
    archivo: "",
    folio: "",
    descripcion: "",
    ID_cliente: 0,
    ID_proyecto: 0,
    ID_estado_documento: 0,
    ID_area: 0,
  });
  const [archivoState, setArchivoState] = useState<File | null>(null);

  useEffect(() => {
    if (session?.user.ID_usuario) {
      setLoading(true);
      obtenerDocumentos()
        .then(setDocumentos)
        .finally(() => setLoading(false));
    }
  }, [session?.user.ID_usuario]);

  const agregarDocumento = async () => {
    if (!session?.user.ID_usuario) return;
    let archivoNombre = "";
    if (form.archivo instanceof File) {
      archivoNombre = form.archivo.name;
    } else if (typeof form.archivo === "string") {
      archivoNombre = form.archivo;
    }
    const documento: DocumentoForm = {
      ...form,
      archivo: archivoNombre,
      ID_usuario: parseInt(session.user.ID_usuario),
    };
    try {
      const nueva = await crearDocumento(documento);
      setDocumentos((prev) => [...prev, nueva]);
      setForm({
        nombre_documento: "",
        tipo_documento: TipoDocumento.planos,
        archivo: "",
        folio: "",
        descripcion: "",
        ID_cliente: 0,
        ID_proyecto: 0,
        ID_estado_documento: 0,
        ID_area: 0,
      });
      setModalAbierto(false);
    } catch (error) {
      console.error("Error al crear el documento:", error);
    }
   console.log(documento);
  };

  return {
    documentos,
    loading,
    modalAbierto,
    setModalAbierto,
    agregarDocumento,
    form,
    setForm,
    archivoState,
    setArchivoState,
  };
}
