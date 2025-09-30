"use client";

import TitlePage from "@/components/titlePage";
import AgregarArea from "./components/agregarArea";
import { TablaArea } from "./components/tablaArea";
import { useArea } from "./hooks/usearea";

export default function AreaPage() {
  const {
    areas,
    setAreas,
    loading,
    modalAbierto,
    setModalAbierto,
    agregarArea,
    form,
  } = useArea();

  return (
    <>
      <TitlePage
        setModalAbierto={setModalAbierto}
        title="Mis áreas"
        textButton="Agregar área"
      />

      <TablaArea areas={areas} setAreas={setAreas} />

      <AgregarArea
        modalAbierto={modalAbierto}
        setModalAbierto={setModalAbierto}
        form={form}
        agregarArea={agregarArea}
      />
    </>
  );
}
