"use client";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

import AgregarProyecto from "./components/agregarProyecto";
import { TablaProyecto } from "./components/tablaProyecto";
import { useProyecto } from "./hooks/useproyecto";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProyectoSchema, CreateProyectoSchema } from "@/zod/schemas/proyectos/proyectoCreate.schema";

export default function ProyectoPage() {
  const {
    proyectos,
    setProyectos,
    loading,
    modalAbierto,
    setModalAbierto,
    agregarProyecto,
  } = useProyecto();

  // Formulario para agregar
  const form = useForm<CreateProyectoSchema>({
    resolver: zodResolver(createProyectoSchema),
    defaultValues: {
      nombre: "",
      descripcion: "",
    },
  });

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Typography size="large" variant="h1">
          Mis proyectos
        </Typography>
        <Button onClick={() => setModalAbierto(true)}>
          Agregar proyecto
        </Button>
      </div>

      {/* Tabla */}
      <TablaProyecto proyectos={proyectos} setProyectos={setProyectos} />



      {/* Modal de Agregar */}
      <AgregarProyecto
        modalAbierto={modalAbierto}
        setModalAbierto={setModalAbierto}
        form={form}
        agregarProyecto={agregarProyecto}
      />
    </>
  );
}
