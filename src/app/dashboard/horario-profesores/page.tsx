"use client";
import { useHorarioProfesores } from "./hooks/useHorarioProfesores";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Fragment } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const dias = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
const horas = Array.from({ length: 10 }, (_, i) => `${8 + i}:00`);

export default function HorarioProfesores() {
  const {
    profesores,
    profesorSeleccionado,
    setProfesorSeleccionado,
    bloques,
    loading,
  } = useHorarioProfesores();

  const getBloque = (dia: string, hora: string) =>
    bloques.find((b) => b.dia === dia && b.hora === hora);

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <Typography size="large" variant="h1">
          Horario de profesores
        </Typography>
      </div>
      <Select
        value={profesorSeleccionado ? String(profesorSeleccionado) : ""}
        onValueChange={(value) => {
          setProfesorSeleccionado(value ? Number(value) : null);
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecciona un profesor" />
        </SelectTrigger>
        <SelectContent>
          {profesores.map((p) => (
            <SelectItem key={p.id} value={String(p.id)}>
              {p.nombre} ({p.codigo_usuario})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {loading && <div>Cargando horario...</div>}
      {!loading && profesorSeleccionado && (
        <div className="overflow-x-auto">
          <div className="grid min-w-[700px] grid-cols-[80px_repeat(7,1fr)] border rounded-lg overflow-hidden mt-4">
            {/* Header */}
            <div className="bg-muted p-2 font-bold text-center">Hora</div>
            {dias.map((dia) => (
              <div
                key={dia}
                className="bg-muted p-2 font-bold text-center border-l"
              >
                {dia}
              </div>
            ))}
            {/* Celdas */}
            {horas.map((hora) => (
              <Fragment key={hora}>
                <div className="bg-muted p-2 text-sm text-center border-t">
                  {hora}
                </div>
                {dias.map((dia) => {
                  const bloque = getBloque(dia, hora);
                  return (
                    <div
                      key={dia + hora}
                      className={cn(
                        "h-16 border-t border-l flex items-center justify-center text-center text-sm",
                        bloque ? "text-white" : ""
                      )}
                      style={{ backgroundColor: bloque?.color }}
                    >
                      <div>
                        <div>{bloque?.titulo}</div>
                        {bloque?.descripcion && (
                          <div className="text-xs">{bloque.descripcion}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
