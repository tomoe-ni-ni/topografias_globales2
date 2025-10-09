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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { TipoDocumento } from "@/enums";
import { CreateDocumentoSchema } from "@/zod/schemas/documentos/documentoCreate.schema";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";
import { useArea } from "../../area/hooks/usearea";
import { useCliente } from "../../clientes/hooks/useCliente";
import { useEstado } from "../../estado_documento/hooks/useestado";
import { useProyecto } from "../../proyectos/hooks/useproyecto";
import { CreateHistorialDocumentoSchema } from "@/zod/schemas/historialDocumento/historialDocumentoCreate.schema";

export default function AgregarHistorial({
  modalAbierto,
  setModalAbierto,
  form,
  archivoState,
  setArchivoState,
  agregarHistorial,
}: {
  modalAbierto: boolean;
  setModalAbierto: Dispatch<SetStateAction<boolean>>;
  form: UseFormReturn<CreateHistorialDocumentoSchema>;
  archivoState: File | null;
  setArchivoState: Dispatch<SetStateAction<File | null>>;
  agregarHistorial: () => Promise<void>;
}) {
  const { estados } = useEstado();
  const handleArchivo = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (!file) return;
    setArchivoState(file);
    form.setValue("documento_historial", file);
  };
  const handleAgregarHistorial = async () => {
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
      form.setValue("documento_historial", archivoPath ?? "");
    }
    await agregarHistorial();
    setArchivoState(null);
  };

  const onSubmit = async (data: CreateHistorialDocumentoSchema) => {};

  return (
    <>
      <Dialog open={modalAbierto} onOpenChange={setModalAbierto}>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>Agregar nuevo historial</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <Input
                onChange={handleArchivo}
                placeholder="subir archivo..."
                type="file"
              />

              <FormField
                control={form.control}
                name="ID_estado_documento"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        value={field.value ? String(field.value) : ""}
                        onValueChange={field.onChange}
                      >
                        <FormControl className="w-full">
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecciona un estado" />
                          </SelectTrigger>
                        </FormControl>
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

              <Button onClick={handleAgregarHistorial}>Agregar historial</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
