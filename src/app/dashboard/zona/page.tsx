"use client";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useZona } from "./hooks/useZona";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function zonas() {
  const {
    zonas,
    loading,
    modalAbierto,
    setModalAbierto,
    agregarZona,
    nombreDepartamento,
    setNombreDepartamento,
    nombreDistrito,
    setNombreDistrito,
    departamento,
    setDepartamento,
    provincia,
    setProvincia,
    departamentos,
    provincias,
  } = useZona();
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <Typography size="large" variant="h1">
          Mis zonas
        </Typography>
        <Button onClick={() => setModalAbierto(true)}>Agregar zona</Button>
      </div>
      <Dialog open={modalAbierto} onOpenChange={setModalAbierto}>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>Agregar nueva tarea</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            {/* Select Departamento */}
            <div>
              <label className="block mb-1 font-semibold">Departamento</label>
              <Select
                value={departamento}
                onValueChange={(value) => {
                  setDepartamento(value);
                  setProvincia(""); // reset provincia
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona un departamento" />
                </SelectTrigger>
                <SelectContent>
                  {departamentos.map((dep) => (
                    <SelectItem key={dep} value={dep}>
                      {dep}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Select Provincia */}
            <div>
              <label className="block mb-1 font-semibold">Provincia</label>
              <Select
                value={provincia}
                onValueChange={setProvincia}
                disabled={!departamento} // deshabilitado si no hay departamento
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona una provincia" />
                </SelectTrigger>
                <SelectContent>
                  {provincias.map((prov) => (
                    <SelectItem key={prov} value={prov}>
                      {prov}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button onClick={agregarZona}>Agregar</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
