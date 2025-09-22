"use client";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useEstado } from "./hooks/useestado";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function EstadoDocumentoPage() {
  const {
    estados,
    loading,
    modalAbierto,
    setModalAbierto,
    agregarEstado,
    estado,
    setEstado,
  } = useEstado();

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <Typography size="large" variant="h1">
          Estados de documento
        </Typography>
        <Button onClick={() => setModalAbierto(true)}>Agregar estado</Button>
      </div>
      <ul className="mb-4">
        {estados.map((e) => (
          <li key={e.ID_estado}>{e.estado}</li>
        ))}
      </ul>
      <Dialog open={modalAbierto} onOpenChange={setModalAbierto}>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>Agregar nuevo estado</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <div>
              <Label className="block mb-1 font-semibold">Estado</Label>
              <Input
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                placeholder="Nombre del estado..."
              />
            </div>
            <Button onClick={agregarEstado}>Agregar</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
