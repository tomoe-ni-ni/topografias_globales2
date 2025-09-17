"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Typography } from "@/components/ui/typography";
import { useTareas } from "./hooks/userDeberes";

export default function Deberes() {
  const {
    tareas,
    agregarTarea,
    toggleCompletado,
    eliminarTarea,
    nuevaTarea,
    nuevaDescripcion,
    modalAbierto,
    setNuevaTarea,
    setNuevaDescripcion,
    setModalAbierto,
  } = useTareas();

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <Typography size="large" variant="h1">
          Mis deberes
        </Typography>
        <Button onClick={() => setModalAbierto(true)}>Agregar tarea</Button>
      </div>
      <Dialog open={modalAbierto} onOpenChange={setModalAbierto}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Agregar nueva tarea</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <Input
              value={nuevaTarea}
              onChange={(e) => setNuevaTarea(e.target.value)}
              placeholder="Título de la tarea..."
            />
            <Textarea
              value={nuevaDescripcion}
              onChange={(e) => setNuevaDescripcion(e.target.value)}
              placeholder="Descripción..."
            />
            <Button onClick={agregarTarea}>Agregar</Button>
          </div>
        </DialogContent>
      </Dialog>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {tareas.map((t) => (
          <Card key={t.id} className="flex flex-col w-full">
            <CardContent className="flex flex-col gap-2 pt-4">
              <div className="flex items-center justify-between">
                <span
                  className={`font-semibold text-lg ${
                    t.estado === "completada"
                      ? "line-through text-muted-foreground"
                      : ""
                  }`}
                >
                  {t.titulo}
                </span>
                <Switch
                  checked={t.estado === "completada"}
                  onCheckedChange={() => toggleCompletado(Number(t.id))}
                />
              </div>
              {t.descripcion && (
                <p
                  className={`text-sm ${
                    t.estado === "completada"
                      ? "line-through text-muted-foreground"
                      : ""
                  }`}
                >
                  {t.descripcion}
                </p>
              )}
              <div className="flex justify-end">
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => eliminarTarea(Number(t.id))}
                >
                  Eliminar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
