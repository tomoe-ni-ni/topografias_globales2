import {
  CreateProyectoSchema,
  createProyectoSchema,
} from "@/zod/schemas/proyectos/proyectoCreate.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Proyecto } from "../domain/proyecto.entity";
import { crearProyecto, obtenerProyectos } from "../domain/proyecto.usecase";

export function useProyecto() {
  const { data: session } = useSession();
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);

  const form = useForm<CreateProyectoSchema>({
    resolver: zodResolver(createProyectoSchema),
    defaultValues: {
      nombre: "",
      descripcion: "",
    },
  });

  useEffect(() => {
    if (session?.user.ID_usuario) {
      setLoading(true);
      obtenerProyectos()
        .then(setProyectos)
        .finally(() => setLoading(false));
    }
  }, [session?.user.ID_usuario]);

  const agregarProyecto = async () => {
    if (!session?.user.ID_usuario) return;
    const proyecto: Proyecto = {
      ...form.getValues(),
    };
    try {
      const nueva = await crearProyecto(proyecto);
      setProyectos((prev) => [...prev, nueva]);
      form.reset();
      setModalAbierto(false);
    } catch (error) {
      console.error("Error al crear la tarea:", error);
    }
  };

  return {
    proyectos,
    setProyectos,
    loading,
    modalAbierto,
    setModalAbierto,
    agregarProyecto,
    form,
  };
}
