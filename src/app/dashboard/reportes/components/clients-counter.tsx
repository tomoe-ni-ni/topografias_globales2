"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, TrendingUp } from "lucide-react"
import { useContadorClientes } from "../hooks/useContadorClientes"

export function ClientsCounter() {
  const { totalClients, loading } = useContadorClientes()

  return (
    <Card className="border-border bg-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium text-card-foreground">
          Total de Clientes
        </CardTitle>
        <Users className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <div className="text-4xl font-bold text-card-foreground">
            {loading ? "..." : totalClients?.toLocaleString()}
          </div>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Comparado con el mes anterior
        </p>
      </CardContent>
    </Card>
  )
}
