import { useEffect, useState } from "react";
import {
  HistorialDocumento,
  historialDocumentoForm,
} from "../domain/historialDocumento.entity";
import {
  crearHistorialDocumento,
  obtenerHistorialesByDocumento,
} from "../domain/historialDocumento.usecase";
import { useForm } from "react-hook-form";
import {
  createHistorialDocumentoSchema,
  CreateHistorialDocumentoSchema,
} from "@/zod/schemas/historialDocumento/historialDocumentoCreate.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

export function useHistoriales({ 
  id, 
  onHistorialCreado 
}: { 
  id: number;
  onHistorialCreado?: () => void;
}) {
  const { data: session } = useSession();
  const [historiales, setHistoriales] = useState<HistorialDocumento[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);

  const form = useForm<CreateHistorialDocumentoSchema>({
    resolver: zodResolver(createHistorialDocumentoSchema),
    defaultValues: {
      documento_historial: "",
      ID_estado_documento: "",
      descripcion: "",
    },
  });
  const [archivoState, setArchivoState] = useState<File | null>(null);

  useEffect(() => {
    setLoading(true);
    obtenerHistorialesByDocumento(id)
      .then(setHistoriales)
      .finally(() => setLoading(false));
  }, [id]);

  const agregarHistorial = async () => {
    if (!session?.user.ID_usuario) return;
    let archivoNombre = "";
    if (form.getValues("documento_historial") instanceof File) {
      archivoNombre = form.getValues("documento_historial").name;
    } else if (typeof form.getValues("documento_historial") === "string") {
      archivoNombre = form.getValues("documento_historial");
    }
    const historial: historialDocumentoForm = {
      ...form.getValues(),
      documento_historial: archivoNombre,
      ID_documento: id,
      ID_usuario: Number(session.user.ID_usuario),
      ID_estado_documento: Number(form.getValues("ID_estado_documento")),
    };
    if (!historial.documento_historial) {
      toast.error("Archivo no seleccionado");
      return;
    }

    try {
      const nueva = await crearHistorialDocumento(historial);
      setHistoriales((prev) => [...prev, nueva]);
      form.reset();
      setModalAbierto(false);
      
      // Llamar callback para actualizar el documento
      if (onHistorialCreado) {
        onHistorialCreado();
      }
      
      toast.success("Historial agregado correctamente");
    } catch (error) {
      console.error("Error al crear el historial:", error);
      toast.error("Error al crear el historial");
    }
  };

  return {
    historiales,
    loading,
    modalAbierto,
    setModalAbierto,
    form,
    archivoState,
    setArchivoState,
    agregarHistorial,
    setHistoriales,
  };
}