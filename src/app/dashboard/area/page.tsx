"use client";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useArea } from "./hooks/usearea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Area() {
  const {
    areas,
    loading,
    modalAbierto,
    setModalAbierto,
    agregarArea,
    nombre,
    setNombre,
  } = useArea();
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <Typography size="large" variant="h1">
          Mis areas
        </Typography>
        <Button onClick={() => setModalAbierto(true)}>Agregar area</Button>
      </div>
      <Dialog open={modalAbierto} onOpenChange={setModalAbierto}>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>Agregar nuevo area</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <div>
              <Label className="block mb-1 font-semibold">Nombre</Label>
              <Input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre del area..." />
            </div>

            <Button onClick={agregarArea}>Agregar</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}