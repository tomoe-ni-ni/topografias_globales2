import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Cliente } from "../domain/cliente.entity";
import ubigeo from "@/ubigeo.json";
import { crearCliente, obtenerClientes } from "../domain/cliente.usecase";

export function useCliente() {
  const { data: session } = useSession();
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [nombreCliente, setNombreCliente] = useState("");
  const [apellidoCliente, setApellidoCliente] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [provincia, setProvincia] = useState("");
  const departamentos = Object.keys(ubigeo);
  const provincias: string[] = departamento
    ? (ubigeo as Record<string, string[]>)[departamento] || []
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
    const cliente: Cliente = {
      nombre: nombreCliente,
      apellido: apellidoCliente,
      nombre_departamento: departamento,
      nombre_provincia: provincia,
    };

    try {
      const nueva = await crearCliente(cliente);
      setClientes((prev) => [...prev, nueva]);
      setNombreCliente("");
      setApellidoCliente("");
      setDepartamento("");
      setProvincia("");
      setModalAbierto(false);
    } catch (error) {
      console.error("Error al crear la tarea:", error);
    }
  };

  return {
    clientes,
    loading,
    modalAbierto,
    setModalAbierto,
    agregarCliente,
    nombreCliente,
    setNombreCliente,
    apellidoCliente,
    setApellidoCliente,
    departamento,
    setDepartamento,
    provincia,
    setProvincia,
    departamentos,
    provincias,
  };
}
