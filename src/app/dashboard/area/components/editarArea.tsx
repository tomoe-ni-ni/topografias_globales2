"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { editAreaSchema } from "@/zod/schemas/area/areaEditar.schema";

export default function EditarArea({
  modalAbierto,
  setModalAbierto,
  form,
  actualizarArea,
}: {
  modalAbierto: boolean;
  setModalAbierto: React.Dispatch<React.SetStateAction<boolean>>;
  form: UseFormReturn<editAreaSchema>;
  actualizarArea: () => Promise<void>;
}) {
  return (
    <Dialog open={modalAbierto} onOpenChange={setModalAbierto}>
      <DialogContent className="w-full max-w-md">
        <DialogHeader>
          <DialogTitle>Editar área</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(actualizarArea)}
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

            <Button type="submit">Guardar cambios</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
