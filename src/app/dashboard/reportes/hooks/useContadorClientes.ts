"use client"

import { useEffect, useState } from "react"

export function useContadorClientes() {
  const [totalClients, setTotalClients] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/reportes?tipo=contadorClientes")
        if (!res.ok) throw new Error("Error al obtener clientes")
        const data = await res.json()
        setTotalClients(data) // Prisma.count devuelve un número
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return { totalClients, loading }
}
