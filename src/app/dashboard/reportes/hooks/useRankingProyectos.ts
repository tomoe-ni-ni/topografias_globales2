"use client";

import { useEffect, useState } from "react";

type ProjectData = {
  id: number;
  name: string;
  documents: number;
  change: "up" | "down" | "neutral";
  percentage: number;
};

export function useRankingProyectos() {
  const [data, setData] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/reportes?tipo=rankingProyectos");
        if (!res.ok) throw new Error("Error al obtener ranking de proyectos");
        const raw = await res.json();

        const formatted: ProjectData[] = raw.map(
          (item: any, index: number) => ({
            id: item.ID_proyecto,
            name: item.proyecto,
            documents: item._count.ID_documento,
          })
        );

        setData(formatted);
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
