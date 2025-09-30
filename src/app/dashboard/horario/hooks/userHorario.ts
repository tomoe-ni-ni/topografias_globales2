import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Bloque } from "../domain/horario.entity";
import {
  obtenerBloques,
  crearBloque,
  actualizarBloque,
  eliminarBloque,
} from "../domain/horario.usecase";

const dias = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
const horas = Array.from({ length: 10 }, (_, i) => `${8 + i}:00`);

export function useHorario() {
  const { data: session } = useSession();
  const [bloques, setBloques] = useState<Bloque[]>([]);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [bloqueActivo, setBloqueActivo] = useState<{
    dia: string;
    hora: string;
  } | null>(null);
  const [form, setForm] = useState({
    titulo: "",
    descripcion: "",
    color: "#ff5722",
  });

  useEffect(() => {
    if (session?.user.ID_usuario) {
      obtenerBloques(Number(session.user.ID_usuario))
        .then(setBloques)
        .catch(console.error);
    }
  }, [session?.user.ID_usuario]);

  const abrirFormulario = (dia: string, hora: string) => {
    const existente = bloques.find((b) => b.dia === dia && b.hora === hora);
    if (existente) {
      setForm({
        titulo: existente.titulo,
        descripcion: existente.descripcion || "",
        color: existente.color,
      });
    } else {
      setForm({ titulo: "", descripcion: "", color: "#ff5722" });
    }
    setBloqueActivo({ dia, hora });
    setModalAbierto(true);
  };

  const guardarBloque = async () => {
    if (!bloqueActivo || !session?.user.ID_usuario) return;
    const nuevoBloque: Bloque = {
      user_id: Number(session.user.ID_usuario),
      dia: bloqueActivo.dia,
      hora: bloqueActivo.hora,
      titulo: form.titulo,
      descripcion: form.descripcion,
      color: form.color,
    };
    if (!nuevoBloque.titulo || !nuevoBloque.color) {
      console.error("Faltan campos obligatorios");
      return;
    }
    try {
      const bloqueGuardado = await crearBloque(nuevoBloque);
      setBloques((prev) => [
        ...prev.filter(
          (b) =>
            !(b.dia === bloqueGuardado.dia && b.hora === bloqueGuardado.hora)
        ),
        bloqueGuardado,
      ]);
      setModalAbierto(false);
    } catch (error) {
      console.error(error);
    }
  };

  const actualizaBloque = async () => {
    if (!bloqueActivo || !session?.user.ID_usuario) return;
    const bloqueActualizado: Bloque = {
      id: getBloque(bloqueActivo.dia, bloqueActivo.hora)?.id,
      user_id: Number(session.user.ID_usuario),
      dia: bloqueActivo.dia,
      hora: bloqueActivo.hora,
      titulo: form.titulo,
      descripcion: form.descripcion,
      color: form.color,
    };
    if (!bloqueActualizado.titulo || !bloqueActualizado.color) {
      console.error("Faltan campos obligatorios");
      return;
    }
    try {
      const bloqueGuardado = await actualizarBloque(bloqueActualizado);
      setBloques((prev) =>
        prev.map((b) => (b.id === bloqueGuardado.id ? bloqueGuardado : b))
      );
      setModalAbierto(false);
    } catch (error) {
      console.error(error);
    }
  };

  const eliminaBloque = async () => {
    if (!bloqueActivo || !session?.user.ID_usuario) return;
    const idBloque = getBloque(bloqueActivo.dia, bloqueActivo.hora)?.id;

    try {
      if (idBloque) {
        await eliminarBloque(idBloque);
        setBloques((prev) => prev.filter((b) => b.id !== idBloque));
      }
      setModalAbierto(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getBloque = (dia: string, hora: string) =>
    bloques.find((b) => b.dia === dia && b.hora === hora);

  return {
    dias,
    horas,
    bloques,
    setBloques,
    modalAbierto,
    setModalAbierto,
    bloqueActivo,
    setBloqueActivo,
    form,
    setForm,
    abrirFormulario,
    guardarBloque,
    actualizaBloque,
    eliminaBloque,
    getBloque,
  };
}
