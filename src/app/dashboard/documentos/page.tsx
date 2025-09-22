"use client";
import { Typography } from "@/components/ui/typography";
import { useDocumento } from "./hooks/useDocumento";
import { useCliente } from "../clientes/hooks/useCliente";
import { useProyecto } from "../proyectos/hooks/useproyecto";
import { useEstado } from "../estado_documento/hooks/useestado";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TipoDocumento } from "@/enums";
import { ChangeEvent, useState } from "react";
import { useArea } from "../area/hooks/usearea";

export default function Documentos() {
  const {
    documentos,
    loading,
    modalAbierto,
    setModalAbierto,
    agregarDocumento,
    form,
    setForm,
    archivoState,
    setArchivoState,
  } = useDocumento();

  const { clientes } = useCliente();
  const { proyectos } = useProyecto();
  const { estados } = useEstado();
  const { areas } = useArea();

  console.log(documentos);
  const handleArchivo = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (!file) return;
    setArchivoState(file);
    setForm((prev) => ({ ...prev, archivo: file }));
  };

  // Subida y registro de documento
  const handleAgregarDocumento = async () => {
    let archivoPath: string | null = null;
    if (archivoState) {
      const formData = new FormData();
      formData.append("file", archivoState);
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.error) {
        alert("Error al subir archivo: " + data.error);
        return;
      }
      archivoPath = data.path;
      setForm((prev) => ({ ...prev, archivo: archivoPath ?? "" }));
    }
    await agregarDocumento();
    setArchivoState(null);
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
              value={form.nombre_documento}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  nombre_documento: e.target.value,
                }))
              }
              placeholder="Nombre del documento..."
            />
            <Select
              value={form.tipo_documento}
              onValueChange={(value) =>
                setForm((prev) => ({ ...prev, tipo_documento: value }))
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona un tipo de documento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={TipoDocumento.planos}>planos</SelectItem>
                <SelectItem value={TipoDocumento.catastrada}>
                  catastro
                </SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              value={form.descripcion}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, descripcion: e.target.value }))
              }
              placeholder="Descripción..."
            />
            <Input
              onChange={handleArchivo}
              placeholder="subir archivo..."
              type="file"
            />
            <Input
              value={form.folio}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, folio: e.target.value }))
              }
              placeholder="Folio..."
            />
            <Select
              value={form.ID_cliente ? String(form.ID_cliente) : ""}
              onValueChange={(value) =>
                setForm((prev) => ({ ...prev, ID_cliente: Number(value) }))
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona un cliente" />
              </SelectTrigger>
              <SelectContent>
                {clientes.map((cliente) => (
                  <SelectItem
                    key={cliente.ID_cliente}
                    value={String(cliente.ID_cliente)}
                  >
                    {cliente.nombre} {cliente.apellido}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={form.ID_proyecto ? String(form.ID_proyecto) : ""}
              onValueChange={(value) =>
                setForm((prev) => ({ ...prev, ID_proyecto: Number(value) }))
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona un proyecto" />
              </SelectTrigger>
              <SelectContent>
                {proyectos.map((proyecto) => (
                  <SelectItem
                    key={proyecto.ID_proyecto}
                    value={String(proyecto.ID_proyecto)}
                  >
                    {proyecto.nombre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={
                form.ID_estado_documento ? String(form.ID_estado_documento) : ""
              }
              onValueChange={(value) =>
                setForm((prev) => ({
                  ...prev,
                  ID_estado_documento: Number(value),
                }))
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona un estado" />
              </SelectTrigger>
              <SelectContent>
                {estados.map((estado) => (
                  <SelectItem
                    key={estado.ID_estado}
                    value={String(estado.ID_estado)}
                  >
                    {estado.estado}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={form.ID_area ? String(form.ID_area) : ""}
              onValueChange={(value) =>
                setForm((prev) => ({ ...prev, ID_area: Number(value) }))
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona un area" />
              </SelectTrigger>
              <SelectContent>
                {areas.map((area) => (
                  <SelectItem key={area.ID_area} value={String(area.ID_area)}>
                    {area.nombre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button onClick={handleAgregarDocumento}>Agregar</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
