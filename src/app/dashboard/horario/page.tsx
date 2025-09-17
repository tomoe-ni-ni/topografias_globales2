"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { BlockPicker, ColorResult } from "react-color";
import { useHorario } from "./hooks/userHorario";
import { horario } from "../../../generated/prisma/index";

export default function Horario() {
  const {
    dias,
    horas,
    bloques,
    modalAbierto,
    setModalAbierto,
    bloqueActivo,
    form,
    setForm,
    abrirFormulario,
    guardarBloque,
    actualizaBloque,
    eliminaBloque,
    getBloque,
  } = useHorario();

  const bloqueExistente = bloqueActivo
    ? bloques.find(
        (b) => b.dia === bloqueActivo.dia && b.hora === bloqueActivo.hora
      )
    : null;

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <Typography size="large" variant="h1">
          Mi horario
        </Typography>
      </div>
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
            <React.Fragment key={hora}>
              <div className="bg-muted p-2 text-sm text-center border-t">
                {hora}
              </div>
              {dias.map((dia) => {
                const bloque = getBloque(dia, hora);
                return (
                  <div
                    key={dia + hora}
                    onClick={() => abrirFormulario(dia, hora)}
                    className={cn(
                      "h-16 border-t border-l cursor-pointer transition-colors flex items-center justify-center text-center text-sm",
                      bloque ? "text-white" : "hover:bg-primary/10"
                    )}
                    style={{ backgroundColor: bloque?.color }}
                  >
                    <Typography>{bloque?.titulo}</Typography>
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={modalAbierto} onOpenChange={setModalAbierto}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {bloqueExistente ? "Editar bloque" : "Agregar bloque"}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <Typography>Título</Typography>
              <Input
                value={form.titulo}
                onChange={(e) =>
                  setForm((f) => ({ ...f, titulo: e.target.value }))
                }
              />
            </div>

            <div>
              <Typography>Descripción (opcional)</Typography>
              <Textarea
                value={form.descripcion}
                onChange={(e) =>
                  setForm((f) => ({ ...f, descripcion: e.target.value }))
                }
              />
            </div>

            <div>
              <Typography>Color</Typography>
              <BlockPicker
                color={form.color}
                onChange={(color: ColorResult) =>
                  setForm((f) => ({ ...f, color: color.hex }))
                }
                colors={[
                  "#FF6900",
                  "#FCB900",
                  "#7BDCB5",
                  "#00D084",
                  "#8ED1FC",
                  "#0693E3",
                  "#ABB8C3",
                  "#EB144C",
                  "#F78DA7",
                  "#9900EF",
                ]}
              />
            </div>

            <Button
              onClick={() => {
                if (bloqueExistente) {
                  actualizaBloque();
                } else {
                  guardarBloque();
                }
              }}
              className="w-full"
            >
              {bloqueExistente ? "Actualizar" : "Guardar"}
            </Button>
            {bloqueExistente ? (
              <Button
                variant={"destructive"}
                onClick={eliminaBloque}
                className="w-full"
              >
                Eliminar
              </Button>
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
