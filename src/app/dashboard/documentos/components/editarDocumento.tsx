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
  FormMessage,
} from "@/components/ui/form";
import { Dispatch, SetStateAction, useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { Documento } from "../domain/documentos.entity";

export default function EditarDocumento({
  modalAbiertoEditar,
  setModalAbiertoEditar,
  formEditar,
  editarDocumento,
  documentoSeleccionado,
}: {
  modalAbiertoEditar: boolean;
  setModalAbiertoEditar: Dispatch<SetStateAction<boolean>>;
  formEditar: UseFormReturn<EditDocumentoSchema>;
  editarDocumento: () => Promise<void>;
  documentoSeleccionado: Documento | null;
}) {
  useEffect(() => {
    if (documentoSeleccionado) {
      formEditar.reset({
        nombre_documento: documentoSeleccionado.nombre_documento || "",
        folio: documentoSeleccionado.folio || "",
        descripcion: documentoSeleccionado.descripcion || "",
      });
    }
  }, [documentoSeleccionado, formEditar]);

  const onSubmit = async (data: EditDocumentoSchema) => {
    console.log(data);
  };

  return (
    <>
      <Dialog open={modalAbiertoEditar} onOpenChange={setModalAbiertoEditar}>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>Editar documento</DialogTitle>
          </DialogHeader>
          <Form {...formEditar}>
            <form
              onSubmit={formEditar.handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <FormField
                control={formEditar.control}
                name="nombre_documento"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Nombre del documento" {...field} />
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
                    <FormControl>
                      <Textarea
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Descripción..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={formEditar.control}
                name="folio"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Folio..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button onClick={editarDocumento}>Agregar</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
