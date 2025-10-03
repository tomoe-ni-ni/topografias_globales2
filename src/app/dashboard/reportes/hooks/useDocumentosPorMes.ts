"use client";

import { useEffect, useState } from "react";

const ALL_MONTHS = [
  "ENE",
  "FEB",
  "MAR",
  "ABR",
  "MAY",
  "JUN",
  "JUL",
  "AGO",
  "SEP",
  "OCT",
  "NOV",
  "DIC",
];

function getMonthName(dateString: string): string {
  const [year, month] = dateString.split("-");
  const monthIndex = parseInt(month, 10) - 1;
  return ALL_MONTHS[monthIndex] ?? "";
}

export function useDocumentosPorMes() {
  const [data, setData] = useState<{ month: string; documents: number }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/reportes?tipo=documentosPorMes");
        if (!res.ok) throw new Error("Error al obtener documentos por mes");
        const raw = await res.json();

        const formatted = raw.map(
          (item: { mes: string; cantidad: number }) => ({
            month: getMonthName(item.mes),
            documents: item.cantidad,
          })
        );

        const map = new Map<string, number>(
          formatted.map((f: { month: string; documents: number }) => [
            f.month,
            f.documents,
          ])
        );

        const completed = ALL_MONTHS.map((m) => ({
          month: m,
          documents: map.get(m) ?? 0,
        }));

        setData(completed);
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
