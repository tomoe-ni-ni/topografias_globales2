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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Usuarios } from "@/types/usuarios";
import { userEditSchema } from "@/zod/schemas/userEdit.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { useArea } from "../../area/hooks/usearea";
interface EditUserFormProps {
  usuario: Usuarios | null;
  onClose: () => void;
  onUsuarioEditado: (usuarioActualizado: Usuarios) => void;
}

export default function EditUserForm({
  usuario,
  onClose,
  onUsuarioEditado,
}: EditUserFormProps) {
  const router = useRouter();
  const form = useForm<z.infer<typeof userEditSchema>>({
    resolver: zodResolver(userEditSchema),
    defaultValues: {
      nombre: usuario?.nombre || "",
      estado: usuario?.estado || "",
      ID_area: `${usuario?.ID_area}` || "",
    },
  });

  const { areas } = useArea();

  const onSubmit = async (data: z.infer<typeof userEditSchema>) => {
    if (!usuario?.ID_usuario) {
      toast.error("Error al actualizar usuario", {
        description: "Error al actualizar usuario",
      });
      return;
    }
    const dataSend = {
      nombre: data.nombre,
      ID_area: parseInt(data.ID_area),
      estado: data.estado,
    };
    try {
      const res = await fetch(`/api/users/${usuario.ID_usuario}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataSend),
      });
      if (!res.ok) {
        toast.error("Error al actualizar usuario", {
          description: "Error al actualizar usuario",
        });
        return;
      }
      const usuarioActualizado = await res.json();
      onUsuarioEditado(usuarioActualizado);
      toast.success("Usuario actualizado correctamente", {
        description: "El usuario ha sido actualizado",
      });
      onClose();
    } catch (err) {
      toast.error("Error al actualizar usuario", {
        description: "Error de red o del servidor",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full   flex flex-col  gap-4"
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
          name="estado"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estado</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="w-full">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un estado" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="activo">Activo</SelectItem>
                  <SelectItem value="inactivo">Inactivo</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="ID_area"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Area</FormLabel>
              <Select
                value={field.value ? String(field.value) : ""}
                onValueChange={field.onChange}
              >
                <FormControl className="w-full">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un area" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {areas.map((area) => (
                    <SelectItem key={area.ID_area} value={String(area.ID_area)}>
                      {area.nombre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant={"default"}
          className="mt-2 font-semibold transition"
          disabled={form.formState.isSubmitting}
        >
          Entrar
        </Button>
      </form>
    </Form>
  );
}
