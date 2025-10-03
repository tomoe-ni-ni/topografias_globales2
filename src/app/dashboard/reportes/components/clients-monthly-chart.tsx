"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"
import { ChartContainer } from "@/components/ui/chart"
import { UserPlus } from "lucide-react"
import { useClientesPorMes } from "../hooks/useClientesPorMes"

const chartConfig = {
  clients: {
    label: "Clientes",
    color: "hsl(var(--chart-2))",
  },
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border bg-background p-3 shadow-lg">
        <p className="text-sm font-semibold text-foreground">{payload[0].payload.month}</p>
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{payload[0].value}</span> clientes nuevos
        </p>
      </div>
    )
  }
  return null
}

export function ClientsMonthlyChart() {
  const { data, loading } = useClientesPorMes()

  return (
    <Card className="border-border bg-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-card-foreground sm:text-base">
          Clientes Nuevos por Mes
        </CardTitle>
        <UserPlus className="h-4 w-4 text-muted-foreground sm:h-5 sm:w-5" />
      </CardHeader>
      <CardContent>
        {loading ? (
          <p className="text-muted-foreground text-sm">Cargando...</p>
        ) : (
          <ChartContainer config={chartConfig} className="h-[250px] w-full sm:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  className="text-xs text-muted-foreground"
                  tick={{ fontSize: 12 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  className="text-xs text-muted-foreground"
                  tick={{ fontSize: 12 }}
                  width={40}
                />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "hsl(var(--muted))", opacity: 0.3 }}
                  animationDuration={200}
                />
                <Bar
                  dataKey="clients"
                  fill="var(--color-clients)"
                  radius={[8, 8, 0, 0]}
                  animationDuration={1000}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  )
}
