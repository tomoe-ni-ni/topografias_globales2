"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
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
import { Typography } from "@/components/ui/typography";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Fragment, useState } from "react";
import { Usuarios } from "@/types/usuarios";
import {
  CreateUserSchema,
  createUserSchema,
} from "@/zod/schemas/userCreate.schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EstadoUsuario, RolUsuario } from "@/enums";
import HeaderPage from "@/components/headerPage";

export default function CreateUserForm({
  onUsuarioCreado,
}: {
  onUsuarioCreado: (usuario: Usuarios) => void;
}) {
  const [modalCrear, setModalCrear] = useState(false);
  const form = useForm<CreateUserSchema>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      password: "",
      rol: RolUsuario.client,
      nombre: "",
      estado: EstadoUsuario.activo,
    },
  });

  const onSubmit = async (data: CreateUserSchema) => {
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        toast.error(error.error || "Error al crear usuario");
        return;
      }
      const usuarioCreado = await res.json();
      onUsuarioCreado(usuarioCreado);
      toast.success("Usuario creado correctamente");
      setModalCrear(false);
      form.reset();
    } catch {
      toast.error("Error de red o del servidor");
    }
  };

  return (
    <Fragment>
      <HeaderPage
        setOnclick={() => setModalCrear(true)}
        textButton="Agregar Usuario"
        title="Usuarios"
      />

      <Dialog open={modalCrear} onOpenChange={setModalCrear}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Crear usuario</DialogTitle>
            <DialogDescription>
              Completa todos los campos para crear un nuevo usuario.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Contraseña"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rol"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rol</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="w-full">
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un rol" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={RolUsuario.admin}>
                          Administrador
                        </SelectItem>
                        <SelectItem value={RolUsuario.client}>
                          Cliente
                        </SelectItem>
                      </SelectContent>
                    </Select>

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
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="w-full">
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un estado" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={EstadoUsuario.activo}>
                          Activo
                        </SelectItem>
                        <SelectItem value={EstadoUsuario.inactivo}>
                          Inactivo
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                variant="default"
                className="mt-2 font-semibold transition"
                disabled={form.formState.isSubmitting}
              >
                Crear Usuario
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}
