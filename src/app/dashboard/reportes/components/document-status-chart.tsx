"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Pie, PieChart, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"
import { FileCheck } from "lucide-react"
import { useEstadoDocumentos } from "../hooks/useEstadoDocumentos"

const COLORS = ["#3b82f6", "#facc15", "#22c55e", "#ef4444", "#8b5cf6"]

export function DocumentStatusChart() {
  const { data, loading } = useEstadoDocumentos()

  return (
    <Card className="border-border bg-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-card-foreground sm:text-base">
          Estado de Documentos
        </CardTitle>
        <FileCheck className="h-4 w-4 text-muted-foreground sm:h-5 sm:w-5" />
      </CardHeader>
      <CardContent>
        {loading ? (
          <p className="text-muted-foreground text-sm">Cargando...</p>
        ) : (
          <div className="h-[300px] sm:h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius="80%"
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
