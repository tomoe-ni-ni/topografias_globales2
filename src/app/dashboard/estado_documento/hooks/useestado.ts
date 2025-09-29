import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { EstadoDocumento } from "../domain/estado.entity";
import { obtenerEstados, crearEstado } from "../domain/estado.usecase";
import {
  createEstadoDocumentoSchema,
  CreateEstadoDocumentoSchema,
} from "@/zod/schemas/estado_documento/estadoDocumentoCreate.schema";

export function useEstado() {
  const [estados, setEstados] = useState<EstadoDocumento[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);

  // ✅ form solo vive aquí
  const form = useForm<CreateEstadoDocumentoSchema>({
    resolver: zodResolver(createEstadoDocumentoSchema),
    defaultValues: { estado: "" },
  });

  useEffect(() => {
    setLoading(true);
    obtenerEstados()
      .then(setEstados)
      .finally(() => setLoading(false));
  }, []);

  const agregarEstado = async () => {
    try {
      const nuevo = await crearEstado(form.getValues()); // 🔹 usamos form aquí
      setEstados((prev) => [...prev, nuevo]);
      form.reset();
      setModalAbierto(false);
    } catch (error) {
      console.error("Error al crear el estado:", error);
    }
  };

  return {
    estados,
    setEstados,
    loading,
    modalAbierto,
    setModalAbierto,
    agregarEstado,
    form, // 🔹 lo exporta el hook, no el usecase
  };
}
