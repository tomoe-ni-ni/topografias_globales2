"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Cliente } from "@/types/clientes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { editClientForm } from "../../../../zod/schemas/clientEdit.schema";

export default function EditClientForm({
  cliente,
  onClose,
  onClienteEditado,
}: {
  cliente: Cliente | null;
  onClose: () => void;
  onClienteEditado: (clienteActualizado: Cliente) => void;
}) {
  const router = useRouter();
  const form = useForm<editClientForm>({
    resolver: zodResolver(editClientForm),
    defaultValues: {
      nombre: cliente?.nombre || "",
      apellidos: cliente?.apellidos || "",
      email: cliente?.email || "",
      telefono: cliente?.telefono || "",
      direccion: cliente?.direccion || "",
    },
  });

  const onSubmit = async (data: editClientForm) => {
    if (!cliente?.id) {
      toast.error("Error al actualizar cliente", {
        description: "Error al actualizar cliente",
      });
      return;
    }
    try {
      const res = await fetch(`/api/clientes/${cliente.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        toast.error("Error al actualizar cliente", {
          description: "Error al actualizar cliente",
        });
        return;
      }
      const clienteActualizado = await res.json();
      onClienteEditado(clienteActualizado);
      toast.success("Cliente actualizado correctamente", {
        description: "El cliente     ha sido actualizado",
      });
      onClose();
    } catch (err) {
      toast.error("Error al actualizar cliente", {
        description: "Error de red o del servidor",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1   md:grid-cols-2  gap-4"
      >
        <FormField
          control={form.control}
          name="nombre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="apellidos"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apellidos</FormLabel>
              <FormControl>
                <Input placeholder="Apellidos" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="telefono"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono</FormLabel>
              <FormControl>
                <Input placeholder="Teléfono" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="direccion"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dirección</FormLabel>
              <FormControl>
                <Input placeholder="Dirección" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="md:col-span-2 flex justify-end">
          <Button
            type="submit"
            variant="default"
            className="mt-2 font-semibold transition"
            disabled={form.formState.isSubmitting}
          >
            Actualizar cliente
          </Button>
        </div>
      </form>
    </Form>
  );
}
