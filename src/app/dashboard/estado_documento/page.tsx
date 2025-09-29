"use client";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

import AgregarEstadoDocumento from "./components/agregarEstadoDocumento";
import { TablaEstadoDocumento } from "./components/tablaEstadoDocumento";
import { useEstado } from "./hooks/useestado";

export default function EstadoDocumentoPage() {
  const {
    estados,
    setEstados,
    loading,
    modalAbierto,
    setModalAbierto,
    agregarEstado,
    form,
  } = useEstado();

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <Typography size="large" variant="h1">
          Estados de documento
        </Typography>
        <Button onClick={() => setModalAbierto(true)}>
          Agregar estado
        </Button>
      </div>

      <TablaEstadoDocumento estadoData={estados} setEstados={setEstados} />

      <AgregarEstadoDocumento
        modalAbierto={modalAbierto}
        setModalAbierto={setModalAbierto}
        form={form}
        agregarEstado={agregarEstado}
      />
    </>
  );
}
