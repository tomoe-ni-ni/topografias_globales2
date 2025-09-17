"use client";
import { Typography } from "@/components/ui/typography";
import { useDocumento } from "./hooks/useDocumento";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TipoDocumento } from "@/enums";
import { ChangeEvent } from "react";

export default function Documentos() {
  const {
    documentos,
    loading,
    modalAbierto,
    setModalAbierto,
    agregarDocumento,
    nombreDocumento,
    setNombreDocumento,
    tipoDocumento,
    setTipoDocumento,
    fecha_ingreso,
    setFecha_ingreso,
    archivo,
    setArchivo,
    folio,
    setFolio,
    descripcion,
    setDescripcion,
    ID_cliente,
    setID_cliente,
    ID_proyecto,
    setID_proyecto,
    ID_estado_documento,
    setID_estado_documento,
    ID_area,
    setID_area,
  } = useDocumento();
  console.log(documentos);
  const handleArchivo = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]|| null;
    if (!file) return;
    setArchivo(file);
  };
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <Typography size="large" variant="h1">
          Mis documentos
        </Typography>
        <Button onClick={() => setModalAbierto(true)}>Agregar documento</Button>
      </div>
      <Dialog open={modalAbierto} onOpenChange={setModalAbierto}>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>Agregar nueva tarea</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <Input
              value={nombreDocumento}
              onChange={(e) => setNombreDocumento(e.target.value)}
              placeholder="Nombre del documento..."
            />
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona un tipo de documento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={TipoDocumento.planos}>planos</SelectItem>
                <SelectItem value={TipoDocumento.catastrada}>catastro</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Descripción..."
            />
            <Input
              onChange={handleArchivo}
              placeholder="subir archivo..."
              type="file"
            />
            <Input
              value={fecha_ingreso}
              onChange={(e) => setFecha_ingreso(e.target.value)}
              placeholder="Fecha de ingreso..."
              type="date"
            />
            <Input
              value={folio}
              onChange={(e) => setFolio(e.target.value)}
              placeholder="Folio..."
            />
            <Input
              value={ID_cliente}
              onChange={(e) => setID_cliente(e.target.valueAsNumber)}
              placeholder="ID cliente..."
              type="number"
            />
            <Input
              value={ID_proyecto}
              onChange={(e) => setID_proyecto(e.target.valueAsNumber)}
              placeholder="ID proyecto..."
              type="number"
            />
            <Input
              value={ID_estado_documento}
              onChange={(e) => setID_estado_documento(e.target.valueAsNumber)}
              placeholder="ID estado documento..."
              type="number"
            />
            <Input
            value={ID_area}
            onChange={(e) => setID_area(e.target.valueAsNumber)}
            placeholder="ID area..."
            type="number"
            />

            <Button onClick={agregarDocumento}>Agregar</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
