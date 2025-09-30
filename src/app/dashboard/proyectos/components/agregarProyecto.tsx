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
import { CreateProyectoSchema } from "@/zod/schemas/proyectos/proyectoCreate.schema";
import { UseFormReturn } from "react-hook-form";

export default function AgregarProyecto({
  modalAbierto,
  setModalAbierto,
  form,
  agregarProyecto,
}: {
  modalAbierto: boolean;
  setModalAbierto: React.Dispatch<React.SetStateAction<boolean>>;
  form: UseFormReturn<CreateProyectoSchema>;
  agregarProyecto: () => Promise<void>;
}) {
  return (
    <Dialog open={modalAbierto} onOpenChange={setModalAbierto}>
      <DialogContent className="w-full max-w-md">
        <DialogHeader>
          <DialogTitle>Agregar nuevo proyecto</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(agregarProyecto)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
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
              control={form.control}
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

            <Button type="submit">Agregar Proyecto</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
