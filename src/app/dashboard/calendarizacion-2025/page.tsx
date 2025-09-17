"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

const actividades = [
  {
    mes: "Enero",
    eventos: [
      {
        dia: 10,
        titulo: "Inicio de clases",
        descripcion: "Bienvenida y presentación",
      },
      {
        dia: 10,
        titulo: "Inicio de clases",
        descripcion: "Bienvenida y presentación",
      },
    ],
  },
  {
    mes: "Febrero",
    eventos: [
      {
        dia: 14,
        titulo: "Día de la Amistad",
        descripcion: "Actividades recreativas",
      },
    ],
  },
  {
    mes: "Marzo",
    eventos: [
      { dia: 8, titulo: "Día de la Mujer", descripcion: "Charla y homenaje" },
    ],
  },
  {
    mes: "Abril",
    eventos: [
      { dia: 22, titulo: "Día de la Tierra", descripcion: "Jornada ecológica" },
    ],
  },
  {
    mes: "Mayo",
    eventos: [{ dia: 1, titulo: "Día del Trabajo", descripcion: "Descanso" }],
  },
  {
    mes: "Junio",
    eventos: [
      {
        dia: 21,
        titulo: "Festival de Ciencias",
        descripcion: "Exposición de proyectos",
      },
    ],
  },
  {
    mes: "Julio",
    eventos: [
      {
        dia: 28,
        titulo: "Fiestas Patrias",
        descripcion: "Acto cívico y desfile",
      },
    ],
  },
  {
    mes: "Agosto",
    eventos: [
      {
        dia: 30,
        titulo: "Día de Santa Rosa",
        descripcion: "Actividades religiosas",
      },
    ],
  },
  {
    mes: "Septiembre",
    eventos: [
      {
        dia: 15,
        titulo: "Semana de la Juventud",
        descripcion: "Concursos y deportes",
      },
    ],
  },
  {
    mes: "Octubre",
    eventos: [
      { dia: 31, titulo: "Halloween", descripcion: "Fiesta de disfraces" },
    ],
  },
  {
    mes: "Noviembre",
    eventos: [
      {
        dia: 2,
        titulo: "Día de los Muertos",
        descripcion: "Homenaje y reflexión",
      },
    ],
  },
  {
    mes: "Diciembre",
    eventos: [
      {
        dia: 20,
        titulo: "Clausura del año",
        descripcion: "Entrega de diplomas",
      },
    ],
  },
];

export default function Calendarizacion2025() {
  return (
    <div className=" w-full mx-auto py-8">
      <Typography variant="h1" size="large" className="mb-8 text-center">
        Calendarización de Actividades 2025
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {actividades.map((mes) => (
          <Card key={mes.mes} className="h-full">
            <CardContent className="pt-4">
              <Typography
                variant="h2"
                size="medium"
                className="mb-2 text-primary"
              >
                {mes.mes}
              </Typography>
              <ul className="space-y-2">
                {mes.eventos.map((evento, idx) => (
                  <li key={idx} className="border-l-4 border-primary pl-3">
                    <div className="font-semibold">
                      {evento.dia} - {evento.titulo}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {evento.descripcion}
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
