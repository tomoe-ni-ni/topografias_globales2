import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TipoDocumento } from "@/enums";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";
import React from "react";

export default function agregarDocumento({
  modalAbierto,
  setModalAbierto,
  form,
  setForm,
  archivoState,
  setArchivoState,
  agregarDocumento,
}: {
  modalAbierto: boolean;
  setModalAbierto:  any;
  form: any;
  setForm: React.Dispatch<React.SetStateAction<any>>;
  archivoState: any;
  setArchivoState: React.Dispatch<React.SetStateAction<any>>;
  agregarDocumento: any;
}) {
  return (
    <>
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
