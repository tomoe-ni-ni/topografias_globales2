"use client";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import AgregarDocumento from "./components/agregarDocumento";
import { TablaDocumentos } from "./components/tabla-documentos";
import { useDocumento } from "./hooks/useDocumento";

export default function Documentos() {
  const {
    documentos,
    setDocumentos,
    loading,
    modalAbierto,
    setModalAbierto,
    agregarDocumento,
    form,
    archivoState,
    setArchivoState,
  } = useDocumento();

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <Typography size="large" variant="h1">
          Mis documentos
        </Typography>
        <Button onClick={() => setModalAbierto(true)}>Agregar documento</Button>
      </div>

      <TablaDocumentos
        documentosData={documentos}
        setDocumentos={setDocumentos}
      />

      <AgregarDocumento
        modalAbierto={modalAbierto}
        setModalAbierto={setModalAbierto}
        form={form}
        archivoState={archivoState}
        setArchivoState={setArchivoState}
        agregarDocumento={agregarDocumento}
      />
    </>
  );
}
