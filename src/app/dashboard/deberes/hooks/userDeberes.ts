import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Tarea } from "../domain/deberes.entity";
import {
  actualizarTarea,
  crearTarea,
  eliminaTarea,
  obtenerTareas,
} from "../domain/deberes.usecase";

export function useTareas() {
  const { data: session } = useSession();
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [loading, setLoading] = useState(false);
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [nuevaDescripcion, setNuevaDescripcion] = useState("");
  const [modalAbierto, setModalAbierto] = useState(false);

  useEffect(() => {
    if (session?.user.id) {
      setLoading(true);
      obtenerTareas(Number(session.user.id))
        .then(setTareas)
        .finally(() => setLoading(false));
    }
  }, [session?.user.id]);

  const agregarTarea = async () => {
    if (!session?.user.id) return;
    const tarea: Tarea = {
      asignado_a: Number(session.user.id),
      titulo: nuevaTarea,
      descripcion: nuevaDescripcion,
      estado: "pendiente",
    };

    try {
      if (nuevaTarea.trim() === "") return;
      const nueva = await crearTarea(tarea);
      setTareas((prev) => [...prev, nueva]);
      setNuevaTarea("");
      setNuevaDescripcion("");
      setModalAbierto(false);
    } catch (error) {
      console.error("Error al crear la tarea:", error);
    }
  };

  const toggleCompletado = async (id: number) => {
    const tarea = tareas.find((t) => t.id === id);
    if (!tarea) return;
    try {
      const actualizada = await actualizarTarea({
        ...tarea,
        estado: tarea.estado === "completada" ? "pendiente" : "completada",
      });
      setTareas((prev) => prev.map((t) => (t.id === id ? actualizada : t)));
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
    }
  };

  const eliminarTarea = async (id: number) => {
    await eliminaTarea(id);
    setTareas((prev) => prev.filter((t) => t.id !== id));
  };

  return {
    nuevaTarea,
    setNuevaTarea,
    nuevaDescripcion,
    setNuevaDescripcion,
    modalAbierto,
    setModalAbierto,
    tareas,
    loading,
    agregarTarea,
    toggleCompletado,
    eliminarTarea,
  };
}
