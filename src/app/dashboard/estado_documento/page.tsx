"use client";

import TitlePage from "@/components/titlePage";
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
      <TitlePage
        setModalAbierto={setModalAbierto}
        title="Estados de documento"
        textButton="Agregar estado"
      />

      <TablaEstadoDocumento estados={estados} setEstados={setEstados} />

      <AgregarEstadoDocumento
        modalAbierto={modalAbierto}
        setModalAbierto={setModalAbierto}
        form={form}
        agregarEstado={agregarEstado}
      />
    </>
  );
}
