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
import { EditEstadoDocumentoSchema } from "@/zod/schemas/estado_documento/estadoDocumentoEditar.schema";
import { Dispatch, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";

export default function EditarEstadoDocumento({
  modalAbiertoEditar,
  setModalAbiertoEditar,
  formEditar,
  editarEstado,
}: {
  modalAbiertoEditar: boolean;
  setModalAbiertoEditar: Dispatch<SetStateAction<boolean>>;
  formEditar: UseFormReturn<EditEstadoDocumentoSchema>;
  editarEstado: () => Promise<void>;
}) {
  return (
    <Dialog open={modalAbiertoEditar} onOpenChange={setModalAbiertoEditar}>
      <DialogContent className="w-full">
        <DialogHeader>
          <DialogTitle>Editar estado de documento</DialogTitle>
        </DialogHeader>
        <Form {...formEditar}>
          <form
            onSubmit={formEditar.handleSubmit(editarEstado)}
            className="flex flex-col gap-2"
          >
            <FormField
              control={formEditar.control}
              name="estado"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estado</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ejemplo: Aprobado, Rechazado..."
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
