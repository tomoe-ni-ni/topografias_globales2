"use client";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

import AgregarProyecto from "./components/agregarProyecto";
import { TablaProyecto } from "./components/tablaProyecto";
import { useProyecto } from "./hooks/useproyecto";

export default function ProyectoPage() {
  const {
    proyectos,
    setProyectos,
    loading,
    modalAbierto,
    setModalAbierto,
    agregarProyecto,
    form,
  } = useProyecto();

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <Typography size="large" variant="h1">
          Mis proyectos
        </Typography>
        <Button onClick={() => setModalAbierto(true)}>Agregar proyecto</Button>
      </div>

      <TablaProyecto proyectos={proyectos} setProyectos={setProyectos} />

      <AgregarProyecto
        modalAbierto={modalAbierto}
        setModalAbierto={setModalAbierto}
        form={form}
        agregarProyecto={agregarProyecto}
      />
    </>
  );
}
