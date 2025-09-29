"use client";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

import AgregarArea from "./components/agregarArea";
import { TablaArea } from "./components/tablaArea";
import { useArea } from "./hooks/usearea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAreaSchema, CreateAreaSchema } from "@/zod/schemas/area/areaCreate.schema";

export default function AreaPage() {
  const {
    areas,
    setAreas,
    loading,
    modalAbierto,
    setModalAbierto,
    agregarArea,
  } = useArea();

  // Formulario para agregar área
  const form = useForm<CreateAreaSchema>({
    resolver: zodResolver(createAreaSchema),
    defaultValues: {
      nombre: "",
    },
  });

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Typography size="large" variant="h1">
          Mis áreas
        </Typography>
        <Button onClick={() => setModalAbierto(true)}>Agregar área</Button>
      </div>

      {/* Tabla */}
      <TablaArea areas={areas} setAreas={setAreas} />

      {/* Modal de Agregar */}
      <AgregarArea
        modalAbierto={modalAbierto}
        setModalAbierto={setModalAbierto}
        form={form}
        agregarArea={agregarArea}
      />
    </>
  );
}
