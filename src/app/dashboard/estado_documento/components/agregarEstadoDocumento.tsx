
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";

// 🔹 Esquema para el estado
// (debes tenerlo en un archivo schemas/estado.schema.ts por ejemplo)
export type CreateEstadoDocumentoSchema = {
  estado: string;
};

export default function AgregarEstadoDocumento({
  modalAbierto,
  setModalAbierto,
  form,
  agregarEstado,
}: {
  modalAbierto: boolean;
  setModalAbierto: React.Dispatch<React.SetStateAction<boolean>>;
  form: UseFormReturn<CreateEstadoDocumentoSchema>;
  agregarEstado: () => Promise<void>;
}) {
  return (
    <Dialog open={modalAbierto} onOpenChange={setModalAbierto}>
      <DialogContent className="w-full">
        <DialogHeader>
          <DialogTitle>Agregar nuevo estado de documento</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(agregarEstado)}
            className="flex flex-col gap-2"
          >
            <FormField
              control={form.control}
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
            <Button type="submit">Agregar</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
