import ubigeo from "@/ubigeo.json";
import {
  createClienteSchema,
  CreateClienteSchema,
} from "@/zod/schemas/clientes/clientesCreate.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Cliente, ClienteForm } from "../domain/cliente.entity";
import { crearCliente, obtenerClientes } from "../domain/cliente.usecase";

export function useCliente() {
  const { data: session } = useSession();
  const form = useForm<CreateClienteSchema>({
    resolver: zodResolver(createClienteSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      nombre_departamento: "",
      nombre_provincia: "",
    },
  });
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);
  const departamentos = Object.keys(ubigeo);
  const provincias: string[] = form.getValues("nombre_departamento")
    ? (ubigeo as Record<string, string[]>)[
        form.getValues("nombre_departamento")
      ] || []
    : [];

  useEffect(() => {
    if (session?.user.ID_usuario) {
      setLoading(true);
      obtenerClientes()
        .then(setClientes)
        .finally(() => setLoading(false));
    }
  }, [session?.user.ID_usuario]);

  const agregarCliente = async () => {
    if (!session?.user.ID_usuario) return;
    const cliente: ClienteForm = {
      ...form.getValues(),
    };

    try {
      const nueva = await crearCliente(cliente);
      setClientes((prev) => [...prev, nueva]);
      form.reset();
      setModalAbierto(false);
    } catch (error) {
      console.error("Error al crear la tarea:", error);
    }
  };

  return {
    clientes,
    setClientes,
    loading,
    modalAbierto,
    setModalAbierto,
    agregarCliente,
    departamentos,
    provincias,
    form,
  };
}
