"use client";
import { useEffect } from "react";
import { ChartBarDefault } from "./components/prueba";
import { LineChart, BarChart } from "lucide-react";
import { CartesianGrid, XAxis, YAxis, Tooltip, Line, Bar } from "recharts";
import { ClientsCounter } from "./components/clients-counter";
import { ClientsMonthlyChart } from "./components/clients-monthly-chart";
import { DocumentStatusChart } from "./components/document-status-chart";
import { DocumentsChart } from "./components/documents-chart";
import { ProjectsRanking } from "./components/projects-ranking";

export default function Page() {
  async function obtenerReporte(tipo: string) {
    const res = await fetch(`/api/reportes?tipo=${tipo}`);
    const data = await res.json();
    console.log(data);
    return data;
  }

  // ejemplo: obtener documentos por mes
  useEffect(() => {
    obtenerReporte("documentosPorMes");
  }, []);
  const data = [
    { mes: "Enero", cantidad: 10 },
    { mes: "Febrero", cantidad: 20 },
    { mes: "Marzo", cantidad: 15 },
  ];

  return (
    <main className="container mx-auto px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <div className="grid gap-4 sm:gap-6">
          {/* Top Row - Counter */}
          <div className="grid gap-4 sm:gap-6">
            <ClientsCounter />
          </div>

          {/* Second Row - Two Charts */}
          <div className="grid gap-4 sm:gap-6 xl:grid-cols-2">
            <DocumentsChart />
            <ClientsMonthlyChart />
          </div>

          {/* Third Row - Document Status Chart and Ranking */}
          <div className="grid gap-4 sm:gap-6 xl:grid-cols-2">
            <DocumentStatusChart />
            <ProjectsRanking />
          </div>
        </div>
      </main>
  );
}
