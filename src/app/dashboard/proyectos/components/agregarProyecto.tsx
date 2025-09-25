import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { CreateProyectoSchema } from "@/zod/schemas/proyectos/proyectoCreate.schema";
import { Dispatch, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";

export default function AgregarProyecto({
  modalAbierto,
  setModalAbierto,
  form,
  agregarProyecto,
}: {
  modalAbierto: boolean;
  setModalAbierto: Dispatch<SetStateAction<boolean>>;
  form: UseFormReturn<CreateProyectoSchema>;
  agregarProyecto: () => Promise<void>;
}) {
  const handleAgregarProyecto = async () => {
    try {
      await agregarProyecto();
      setModalAbierto(false); // ✅ solo cerrar si no hay error
      form.reset(); // opcional: limpiar formulario
    } catch (error) {
      console.error("Error al agregar proyecto:", error);
    }
  };

  return (
    <Dialog open={modalAbierto} onOpenChange={setModalAbierto}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Agregar nuevo proyecto</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleAgregarProyecto)}
            className="flex flex-col gap-2"
          >
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Nombre del proyecto..." {...field} />
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
                    <Textarea placeholder="Descripción del proyecto..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-2 font-semibold transition">
              Agregar
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
