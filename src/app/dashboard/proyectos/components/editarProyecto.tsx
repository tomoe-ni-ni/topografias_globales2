"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { editProyectoSchema } from "@/zod/schemas/proyectos/proyectoEditar.schema";
import { UseFormReturn } from "react-hook-form";

export default function EditarProyecto({
  modalAbierto,
  setModalAbierto,
  formEditar,
  editarProyecto,
}: {
  modalAbierto: boolean;
  setModalAbierto: React.Dispatch<React.SetStateAction<boolean>>;
  formEditar: UseFormReturn<editProyectoSchema>;
  editarProyecto: () => Promise<void>;
}) {
  return (
    <Dialog open={modalAbierto} onOpenChange={setModalAbierto}>
      <DialogContent className="w-full max-w-md">
        <DialogHeader>
          <DialogTitle>Editar proyecto</DialogTitle>
        </DialogHeader>

        <Form {...formEditar}>
          <form
            onSubmit={formEditar.handleSubmit(editarProyecto)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={formEditar.control}
              name="nombre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="Ejemplo: Proyecto ERP" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={formEditar.control}
              name="descripcion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripción</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ejemplo: Sistema para gestión de recursos"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Guardar cambios</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
