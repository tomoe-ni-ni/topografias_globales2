"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dispatch, SetStateAction, useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { EstadoDocumento } from "../domain/estado.entity";
import { EditEstadoDocumentoSchema } from "@/zod/schemas/estado_documento/estadoDocumentoEditar.schema";

export default function EditarEstadoDocumento({
  modalAbiertoEditar,
  setModalAbiertoEditar,
  formEditar,
  editarEstado,
  estadoSeleccionado,
}: {
  modalAbiertoEditar: boolean;
  setModalAbiertoEditar: Dispatch<SetStateAction<boolean>>;
  formEditar: UseFormReturn<EditEstadoDocumentoSchema>;
  editarEstado: () => Promise<void>;
  estadoSeleccionado: EstadoDocumento | null;
}) {
  useEffect(() => {
    if (estadoSeleccionado) {
      formEditar.reset({
        estado: estadoSeleccionado.estado || "",
      });
    }
  }, [estadoSeleccionado, formEditar]);

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
                    <Input placeholder="Ejemplo: Aprobado, Rechazado..." {...field} />
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
