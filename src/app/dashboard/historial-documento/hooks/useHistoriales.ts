import { useEffect, useState } from "react";
import { HistorialDocumento } from "../domain/historialDocumento.entity";

export function useHistoriales({ id }: { id: number }) {
  const [historiales, setHistoriales] = useState<HistorialDocumento[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/historial-documentos/${id}`)
      .then(res => res.json())
      .then(setHistoriales)
      .catch(error => {
        console.error("Error al obtener historiales:", error);
        setHistoriales([]);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return { historiales, loading };
}