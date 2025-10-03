"use client"

import { useEffect, useState } from "react"

// Función para transformar fecha a mes corto en español
function getMonthName(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleString("es-ES", { month: "short" }).toUpperCase()
}

export function useDocumentosPorMes() {
  const [data, setData] = useState<{ month: string; documents: number }[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/reportes?tipo=documentosPorMes")
        if (!res.ok) throw new Error("Error al obtener documentos por mes")
        const raw = await res.json()

        // Transformar datos
        const formatted = raw.map((item: { mes: string; cantidad: number }) => ({
          month: getMonthName(item.mes),
          documents: item.cantidad,
        }))

        setData(formatted)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return { data, loading }
}
