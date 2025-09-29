
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Proyecto } from "../domain/proyecto.entity";
import { crearProyecto, obtenerProyectos } from "../domain/proyecto.usecase";

export function useProyecto() {
  const { data: session } = useSession();
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

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
      nombre: nombre,
      descripcion: descripcion,
    };
    try {
      const nueva = await crearProyecto(proyecto);
      setProyectos((prev) => [...prev, nueva]);
      setNombre("");
      setDescripcion("");
      setModalAbierto(false);
    } catch (error) {
      console.error("Error al crear la tarea:", error);
    }
  };

  return {
    proyectos,
    loading,
    modalAbierto,
    setModalAbierto,
    agregarProyecto,
    nombre,
    setNombre,
    descripcion,
    setDescripcion,
    setProyectos,
  };
}
