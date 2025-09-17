"use client";
import { useEffect, useState } from "react";
import CreateClientForm from "./components/CreateClientForm";
import { TablaClientes } from "@/components/tablas/tabla-clientes";
import { Cliente } from "@/types/clientes";

function Clientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    fetch("/api/clientes")
      .then((res) => res.json())
      .then((data) => {
        setClientes(data);
      });
  }, []);

  const agregarCliente = (clienteNuevo: Cliente) => {
    setClientes((prev) => [{ ...clienteNuevo }, ...prev]);
  };

  const actualizarCliente = (clienteActualizado: Cliente) => {
    setClientes((prev) =>
      prev.map((c) => (c.id === clienteActualizado.id ? clienteActualizado : c))
    );
  };

  const eliminarCliente = (id: number) => {
    setClientes((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <>
      <CreateClientForm onClienteCreado={agregarCliente} />
      <TablaClientes
        clientesData={clientes}
        onClienteEditado={actualizarCliente}
        onClienteEliminado={eliminarCliente}
      />
    </>
  );
}

export default Clientes;
