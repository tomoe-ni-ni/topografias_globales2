"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"
import { ChartContainer } from "@/components/ui/chart"
import { FileText } from "lucide-react"
import { useDocumentosPorMes } from "../hooks/useDocumentosPorMes"

const chartConfig = {
  documents: {
    label: "Documentos",
    color: "hsl(var(--chart-1))",
  },
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border bg-background p-3 shadow-lg">
        <p className="text-sm font-semibold text-foreground">{payload[0].payload.month}</p>
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{payload[0].value}</span> documentos
        </p>
      </div>
    )
  }
  return null
}

export function DocumentsChart() {
  const { data, loading } = useDocumentosPorMes()

  return (
    <Card className="border-border bg-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-card-foreground sm:text-base">
          Documentos por Mes
        </CardTitle>
        <FileText className="h-4 w-4 text-muted-foreground sm:h-5 sm:w-5" />
      </CardHeader>
      <CardContent>
        {loading ? (
          <p className="text-muted-foreground text-sm">Cargando...</p>
        ) : (
          <ChartContainer config={chartConfig} className="h-[250px] w-full sm:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="fillDocuments" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-documents)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="var(--color-documents)" stopOpacity={0} />
                  </linearGradient>
                </defs>
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
                  cursor={{ stroke: "hsl(var(--border))", strokeWidth: 1, strokeDasharray: "5 5" }}
                  animationDuration={200}
                />
                <Area
                  type="monotone"
                  dataKey="documents"
                  stroke="var(--color-documents)"
                  strokeWidth={2}
                  fill="url(#fillDocuments)"
                  animationDuration={1000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  )
}
