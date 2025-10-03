"use client"

import { useEffect, useState } from "react"

// Función para convertir Date a nombre de mes corto en español
function getMonthName(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleString("es-ES", { month: "short" }).toUpperCase()
}

export function useClientesPorMes() {
  const [data, setData] = useState<{ month: string; clients: number }[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/reportes?tipo=clientesPorMes")
        if (!res.ok) throw new Error("Error al obtener clientes por mes")
        const raw = await res.json()

        // Transformar formato
        const formatted = raw.map((item: { mes: string; cantidad: number }) => ({
          month: getMonthName(item.mes),
          clients: item.cantidad,
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
