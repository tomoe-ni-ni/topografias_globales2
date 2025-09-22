import { useEffect, useState } from "react";
import { EstadoDocumento } from "../domain/estado.entity";
import { obtenerEstados, crearEstado } from "../domain/estado.usecase";

export function useEstado() {
  const [estados, setEstados] = useState<EstadoDocumento[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [estado, setEstado] = useState("");

  useEffect(() => {
    setLoading(true);
    obtenerEstados()
      .then(setEstados)
      .finally(() => setLoading(false));
  }, []);

  const agregarEstado = async () => {
    if (!estado) return;
    const nuevoEstado: EstadoDocumento = {
      estado: estado,
    };
    try {
      const nuevo = await crearEstado(nuevoEstado);
      setEstados((prev) => [...prev, nuevo]);
      setEstado("");
      setModalAbierto(false);
    } catch (error) {
      console.error("Error al crear el estado:", error);
    }
  };

  return {
    estados,
    loading,
    modalAbierto,
    setModalAbierto,
    agregarEstado,
    estado,
    setEstado,
  };
}
