"use client";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

import AgregarClientes from "./components/agregarClientes";
import { TablaClientes } from "./components/tablaClientes";
import { useCliente } from "./hooks/useCliente";

export default function Cliente() {
  const {
    clientes,
    setClientes,
    loading,
    modalAbierto,
    setModalAbierto,
    agregarCliente,
    departamentos,
    provincias,
    form,
  } = useCliente();
  console.log(clientes);
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <Typography size="large" variant="h1">
          Mis clientes
        </Typography>
        <Button onClick={() => setModalAbierto(true)}>Agregar cliente</Button>
      </div>

      <TablaClientes clienteData={clientes} setClientes={setClientes} />

      <AgregarClientes
        modalAbierto={modalAbierto}
        setModalAbierto={setModalAbierto}
        form={form}
        agregarCliente={agregarCliente}
        departamentos={departamentos}
        provincias={provincias}
      />
    </>
  );
}
