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
import { Fragment, useState } from "react";
import HeaderPage from "@/components/headerPage";
import {
  createClientSchema,
  CreateClientSchema,
} from "@/zod/schemas/clientCreate.schema";
import { EstadoUsuario, RolUsuario } from "@/enums";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Eye, EyeClosed } from "lucide-react";
import { Cliente } from "@/types/clientes";

export default function CreateClientForm({
  onClienteCreado,
}: {
  onClienteCreado: (cliente: Cliente) => void;
}) {
  const [modalCrear, setModalCrear] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<CreateClientSchema>({
    resolver: zodResolver(createClientSchema),
    defaultValues: {
      nombre: "",
      apellidos: "",
      email: "",
      telefono: "",
      direccion: "",
      password: "",
      rol: RolUsuario.client,
      estado: EstadoUsuario.activo,
    },
  });

  const onSubmit = async (data: CreateClientSchema) => {
    try {
      const res = await fetch("/api/clientes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        toast.error(error.error || "Error al crear cliente");
        return;
      }
      const clienteCreado = await res.json();
      onClienteCreado(clienteCreado);
      toast.success("Cliente creado correctamente");
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
        textButton="Agregar Cliente"
        title="Clientes"
      />

      <Dialog open={modalCrear} onOpenChange={setModalCrear}>
        <DialogContent className=" md:max-w-2xl  xl:max-w-4xl">
          <DialogHeader>
            <DialogTitle>Crear Cliente</DialogTitle>
            <DialogDescription>
              Completa todos los campos para crear un nuevo cliente.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Contraseña"
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          tabIndex={-1}
                          className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground"
                          onClick={() => setShowPassword((v) => !v)}
                        >
                          {showPassword ? <Eye /> : <EyeClosed />}
                        </Button>
                      </div>
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
                  Crear cliente
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}
