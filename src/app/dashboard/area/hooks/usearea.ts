import {
  CreateAreaSchema,
  createAreaSchema,
} from "@/zod/schemas/area/areaCreate.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Area } from "../domain/area.entity";
import { crearArea, obtenerAreas } from "../domain/area.usecase";

export function useArea() {
  const [areas, setAreas] = useState<Area[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);

  const form = useForm<CreateAreaSchema>({
    resolver: zodResolver(createAreaSchema),
    defaultValues: {
      nombre: "",
    },
  });

  useEffect(() => {
    setLoading(true);
    obtenerAreas()
      .then(setAreas)
      .finally(() => setLoading(false));
  }, []);

  const agregarArea = async () => {
    const area: Area = {
      ...form.getValues(),
    };
    try {
      const nueva = await crearArea(area);
      setAreas((prev) => [...prev, nueva]);
      form.reset();
      setModalAbierto(false);
    } catch (error) {
      console.error("Error al crear la tarea:", error);
    }
  };

  return {
    areas,
    setAreas,
    loading,
    modalAbierto,
    setModalAbierto,
    agregarArea,
    form,
  };
}
