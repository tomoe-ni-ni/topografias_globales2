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
import {
  CreateDocumentoSchema,
  createDocumentoSchema,
} from "@/zod/schemas/documentos/documentoCreate.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { useArea } from "../../area/hooks/usearea";
import { useCliente } from "../../clientes/hooks/useCliente";
import { useEstado } from "../../estado_documento/hooks/useestado";
import { useProyecto } from "../../proyectos/hooks/useProyecto";
import { DocumentoForm } from "../domain/documentos.entity";

export default function AgregarDocumento({
  modalAbierto,
  setModalAbierto,
  form,
  archivoState,
  setArchivoState,
  agregarDocumento,
}: {
  modalAbierto: boolean;
  setModalAbierto: Dispatch<SetStateAction<boolean>>;
  form: UseFormReturn<CreateDocumentoSchema>;
  archivoState: File | null;
  setArchivoState: Dispatch<SetStateAction<File | null>>;
  agregarDocumento: () => Promise<void>;
}) {
  const { clientes } = useCliente();
  const { proyectos } = useProyecto();
  const { estados } = useEstado();
  const { areas } = useArea();
  const handleArchivo = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (!file) return;
    setArchivoState(file);
    form.setValue("archivo", file);
  };
  const handleAgregarDocumento = async () => {
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
      form.setValue("archivo", archivoPath ?? "");
    }
    await agregarDocumento();
    setArchivoState(null);
  };

  const onSubmit = async (data: CreateDocumentoSchema) => {
    console.log(data);
  };

  return (
    <>
      <Dialog open={modalAbierto} onOpenChange={setModalAbierto}>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>Agregar nueva tarea</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <FormField
                control={form.control}
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
                control={form.control}
                name="tipo_documento"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl className="w-full">
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona un tipo de documento" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value={TipoDocumento.planos}>
                            planos
                          </SelectItem>
                          <SelectItem value={TipoDocumento.catastrada}>
                            catastro
                          </SelectItem>
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

              <Input
                onChange={handleArchivo}
                placeholder="subir archivo..."
                type="file"
              />

              <FormField
                control={form.control}
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

              <FormField
                control={form.control}
                name="ID_cliente"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      value={field.value ? String(field.value) : ""}
                      onValueChange={field.onChange}
                    >
                      <FormControl className="w-full">
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un cliente" />
                        </SelectTrigger>
                      </FormControl>
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
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="ID_proyecto"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        value={field.value ? String(field.value) : ""}
                        onValueChange={field.onChange}
                      >
                        <FormControl className="w-full">
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecciona un proyecto" />
                          </SelectTrigger>
                        </FormControl>
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
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
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
                name="ID_area"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        value={field.value ? String(field.value) : ""}
                        onValueChange={field.onChange}
                      >
                        <FormControl className="w-full">
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecciona un area" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {areas.map((area) => (
                            <SelectItem
                              key={area.ID_area}
                              value={String(area.ID_area)}
                            >
                              {area.nombre}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button onClick={handleAgregarDocumento}>Agregar</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
