import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  createEstadoDocumentoSchema,
  CreateEstadoDocumentoSchema,
} from "@/zod/schemas/estado_documento/estadoDocumentoCreate.schema";
import { EstadoDocumento } from "../domain/estado.entity";
import { crearEstado, obtenerEstados } from "../domain/estado.usecase";

export function useEstado() {
  const [estados, setEstados] = useState<EstadoDocumento[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);

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
    const estado: EstadoDocumento = {
      ...form.getValues(),
    };
    try {
      const nuevo = await crearEstado(estado);
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
    form,
  };
}
