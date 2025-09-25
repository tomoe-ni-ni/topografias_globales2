import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter 
} from "@/components/ui/dialog";
import { 
  Form, 
  FormField, 
  FormItem, 
  FormControl, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Proyecto } from "@/generated/prisma";
import { EditProyectoSchema } from "@/zod/schemas/proyectos/proyectoEditar.schema";
import { Dispatch, SetStateAction, useEffect } from "react";
import { UseFormReturn } from "react-hook-form";

export default function EditarProyecto({
  modalAbiertoEditar,
  setModalAbiertoEditar,
  formEditar,
  editarProyecto,
  proyectoSeleccionado,
}: {
  modalAbiertoEditar: boolean;
  setModalAbiertoEditar: Dispatch<SetStateAction<boolean>>;
  formEditar: UseFormReturn<EditProyectoSchema>;
  editarProyecto: () => Promise<void>;
  proyectoSeleccionado: Proyecto | null;
}) {
  useEffect(() => {
    if (proyectoSeleccionado) {
      formEditar.reset({
        nombre: proyectoSeleccionado.nombre,
        descripcion: proyectoSeleccionado.descripcion || "",
      });
    }
  }, [proyectoSeleccionado, formEditar]);

  // Al cerrar, limpiamos
  const handleClose = (open: boolean) => {
    setModalAbiertoEditar(open);
    if (!open) {
      formEditar.reset();
    }
  };

  return (
    <Dialog open={modalAbiertoEditar} onOpenChange={handleClose}>
      <DialogContent className="w-full">
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
                  <FormControl>
                    <Input placeholder="Nombre" {...field} />
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
                    <Textarea {...field} placeholder="Descripción..." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button
                type="submit"
                variant="default"
                className="mt-2 font-semibold transition"
                disabled={formEditar.formState.isSubmitting}
              >
                {formEditar.formState.isSubmitting ? "Guardando..." : "Guardar"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
