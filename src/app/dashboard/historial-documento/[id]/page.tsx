"use client";
import { useParams } from "next/navigation";
import { DocumentoDetalle } from "../components/documento-detalle";
import { TablaHistorialDocumento } from "../components/tabla-historial-documento";
import { useHistorialDocumento } from "../hooks/useHistorialDocumento";
import { useHistoriales } from "../hooks/useHistoriales";
import TitlePage from "@/components/titlePage";
import AgregarHistorial from "../components/agregarHistorial";

export default function DocumentoPage() {
  const params = useParams();
  console.log(params.id);
  const {
    documento,
    loading: loadingDoc,
    cargarDocumento,
  } = useHistorialDocumento({
    id: Number(params.id),
  });

  const {
    historiales,
    setHistoriales,
    loading: loadingHist,
    modalAbierto,
    setModalAbierto,
    agregarHistorial,
    form,
    archivoState,
    setArchivoState,
  } = useHistoriales({
    id: Number(params.id),
    onHistorialCreado: cargarDocumento,
  });

  if (loadingDoc) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      <DocumentoDetalle documento={documento} />

      <div>
        <TitlePage
          setModalAbierto={setModalAbierto}
          title="Historial de Cambios"
          textButton="Agregar cambio"
        />
        <TablaHistorialDocumento
          historiales={historiales}
          setHistoriales={setHistoriales}
        />
      </div>
      <AgregarHistorial
        modalAbierto={modalAbierto}
        setModalAbierto={setModalAbierto}
        form={form}
        archivoState={archivoState}
        setArchivoState={setArchivoState}
        agregarHistorial={agregarHistorial}
      />
    </div>
  );
}
