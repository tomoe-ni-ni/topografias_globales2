"use client";

import { useEffect, useState } from "react";

export function useEstadoDocumentos() {
  const [data, setData] = useState<{ name: string; value: number }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/reportes?tipo=estadoDocumentos");
        if (!res.ok) throw new Error("Error al obtener estados de documentos");
        const raw = await res.json();
        setData(raw);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { data, loading };
}
