"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, TrendingUp, TrendingDown, Minus } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { useRankingProyectos } from "../hooks/useRankingProyectos"

export function ProjectsRanking() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const { data: projectsData, loading } = useRankingProyectos()

  if (loading) {
    return (
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle>Cargando ranking de proyectos...</CardTitle>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card className="border-border bg-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-sm font-medium text-card-foreground sm:text-base">
          Ranking de Proyectos por Documentos
        </CardTitle>
        <Trophy className="h-4 w-4 text-muted-foreground sm:h-5 sm:w-5" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2 sm:space-y-3">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="group relative flex items-center justify-between rounded-lg border border-border bg-secondary/50 p-3 transition-all hover:scale-[1.02] hover:bg-secondary hover:shadow-md sm:p-4"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex items-center gap-2 sm:gap-4">
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold sm:h-10 sm:w-10 sm:text-base",
                    index === 0 && "bg-accent text-accent-foreground",
                    index === 1 && "bg-chart-2/20 text-chart-2",
                    index === 2 && "bg-chart-3/20 text-chart-3",
                    index > 2 && "bg-muted text-muted-foreground",
                  )}
                >
                  {index + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium text-card-foreground text-sm sm:text-base">
                    {project.name}
                  </p>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    {project.documents.toLocaleString()} documentos
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {project.change === "up" && (
                  <div className="flex items-center gap-1 text-xs font-medium text-accent sm:text-sm">
                    <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">+{project.percentage}%</span>
                  </div>
                )}
                {project.change === "down" && (
                  <div className="flex items-center gap-1 text-xs font-medium text-destructive sm:text-sm">
                    <TrendingDown className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">{project.percentage}%</span>
                  </div>
                )}
                {project.change === "neutral" && (
                  <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground sm:text-sm">
                    <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">{project.percentage}%</span>
                  </div>
                )}
              </div>
              {hoveredId === project.id && (
                <div className="absolute -top-12 left-1/2 z-10 -translate-x-1/2 rounded-lg border border-border bg-popover px-3 py-2 text-xs text-popover-foreground shadow-lg sm:text-sm">
                  <p className="whitespace-nowrap font-medium">
                    Posición #{index + 1} - {project.documents.toLocaleString()} docs
                  </p>
                  <p className="whitespace-nowrap text-muted-foreground">
                    Tendencia: {project.change === "up" ? "↑" : project.change === "down" ? "↓" : "→"}{" "}
                    {Math.abs(project.percentage)}%
                  </p>
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-border bg-popover" />
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
