"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EditDocumentoSchema } from "@/zod/schemas/documentos/documentoEditar.schema";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Dispatch, SetStateAction, useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { Cliente } from "../domain/cliente.entity";
import { EditClienteSchema } from "@/zod/schemas/clientes/clientesEditar.schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function EditarCliente({
  modalAbiertoEditar,
  setModalAbiertoEditar,
  formEditar,
  editarCliente,
  clienteSeleccionado,
  departamentos,
  provincias,
}: {
  modalAbiertoEditar: boolean;
  setModalAbiertoEditar: Dispatch<SetStateAction<boolean>>;
  formEditar: UseFormReturn<EditClienteSchema>;
  editarCliente: () => Promise<void>;
  clienteSeleccionado: Cliente | null;
  departamentos: string[];
  provincias: string[];
}) {
  useEffect(() => {
    if (clienteSeleccionado) {
      formEditar.reset({
        nombre: clienteSeleccionado?.nombre || "",
        apellido: clienteSeleccionado?.apellido || "",
        nombre_departamento: clienteSeleccionado?.nombre_departamento || "",
        nombre_provincia: clienteSeleccionado?.nombre_provincia || "",
      });
    }
  }, [clienteSeleccionado, formEditar]);
  const departamentoSeleccionado = formEditar.watch("nombre_departamento");
  return (
    <>
      <Dialog open={modalAbiertoEditar} onOpenChange={setModalAbiertoEditar}>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>Editar cliente</DialogTitle>
          </DialogHeader>
          <Form {...formEditar}>
            <form
              onSubmit={formEditar.handleSubmit(editarCliente)}
              className="flex flex-col gap-2"
            >
              <FormField
                control={formEditar.control}
                name="nombre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Nombre del cliente" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formEditar.control}
                name="apellido"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apellido (opcional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Apellido del cliente" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={formEditar.control}
                name="nombre_departamento"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Departamenos</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl className="w-full">
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un cliente" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {departamentos.map((dep) => (
                          <SelectItem key={dep} value={dep}>
                            {dep}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={formEditar.control}
                name="nombre_provincia"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Provincias</FormLabel>
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                      disabled={!departamentoSeleccionado}
                    >
                      <FormControl className="w-full">
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una provincia" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {provincias.map((prov) => (
                          <SelectItem key={prov} value={prov}>
                            {prov}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Agregar</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
