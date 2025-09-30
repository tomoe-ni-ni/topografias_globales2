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
import { CreateAreaSchema } from "@/zod/schemas/area/areaCreate.schema";
import { UseFormReturn } from "react-hook-form";

export default function AgregarArea({
  modalAbierto,
  setModalAbierto,
  form,
  agregarArea,
}: {
  modalAbierto: boolean;
  setModalAbierto: React.Dispatch<React.SetStateAction<boolean>>;
  form: UseFormReturn<CreateAreaSchema>;
  agregarArea: () => Promise<void>;
}) {
  return (
    <Dialog open={modalAbierto} onOpenChange={setModalAbierto}>
      <DialogContent className="w-full max-w-md">
        <DialogHeader>
          <DialogTitle>Agregar nueva área</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(agregarArea)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="Ejemplo: Recursos Humanos" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Agregar Área</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
