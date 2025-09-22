"use client";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useProyecto } from "./hooks/useproyecto";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function useProyectos() {
  const {
    proyectos,
    loading,
    modalAbierto,
    setModalAbierto,
    agregarProyecto,
    nombre,
    setNombre,
    descripcion,
    setDescripcion,
  } = useProyecto();
  return (
    <> 
    <div className="flex items-center justify-between mb-4">
      <Typography size="large" variant="h1">
        Mis proyectos
      </Typography>
      <Button onClick={() => setModalAbierto(true)}>Agregar proyecto</Button>
    </div>
    <Dialog open={modalAbierto} onOpenChange={setModalAbierto}>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>Agregar nuevo proyecto</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <div>
              <Label className="block mb-1 font-semibold">Nombre</Label>
              <Input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre del proyecto..."
              />
            </div>
            <div>
              <Textarea
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Descripción de proyecto..."
            />
            </div>

            <Button onClick={agregarProyecto}>Agregar</Button>
          </div>
        </DialogContent>
      </Dialog>
    </> 

  );
}
