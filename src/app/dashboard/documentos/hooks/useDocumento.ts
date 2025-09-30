import { TipoDocumento } from "@/enums";
import {
  createDocumentoSchema,
  CreateDocumentoSchema,
} from "@/zod/schemas/documentos/documentoCreate.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
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

  const form = useForm<CreateDocumentoSchema>({
    resolver: zodResolver(createDocumentoSchema),
    defaultValues: {
      nombre_documento: "",
      tipo_documento: TipoDocumento.planos,
      archivo: "",
      folio: "",
      descripcion: "",
      ID_cliente: "",
      ID_proyecto: "",
      ID_estado_documento: "",
      ID_area: "",
    },
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
    if (form.getValues("archivo") instanceof File) {
      archivoNombre = form.getValues("archivo").name;
    } else if (typeof form.getValues("archivo") === "string") {
      archivoNombre = form.getValues("archivo");
    }
    const documento: DocumentoForm = {
      ...form.getValues(),
      archivo: archivoNombre,
      ID_area: parseInt(form.getValues("ID_area")),
      ID_cliente: parseInt(form.getValues("ID_cliente")),
      ID_estado_documento: parseInt(form.getValues("ID_estado_documento")),
      ID_proyecto: parseInt(form.getValues("ID_proyecto")),
      ID_usuario: parseInt(session.user.ID_usuario),
    };
    if (!documento.archivo) {
      toast.error("Archivo no seleccionado");
      return;
    }

    try {
      const nueva = await crearDocumento(documento);
      setDocumentos((prev) => [...prev, nueva]);
      form.reset();
      setModalAbierto(false);
    } catch (error) {
      console.error("Error al crear el documento:", error);
    }
  };

  return {
    documentos,
    setDocumentos,
    loading,
    modalAbierto,
    setModalAbierto,
    agregarDocumento,
    form,
    archivoState,
    setArchivoState,
  };
}
