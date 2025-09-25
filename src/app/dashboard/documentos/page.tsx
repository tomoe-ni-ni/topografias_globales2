"use client";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ChangeEvent, useState } from "react";
import { useArea } from "../area/hooks/usearea";
import { useCliente } from "../clientes/hooks/useCliente";
import { useEstado } from "../estado_documento/hooks/useestado";
import { useProyecto } from "../proyectos/hooks/useproyecto";
import AgregarDocumento from "./components/agregarDocumento";
import { TablaDocumentos } from "./components/tabla-documentos";
import { Documento } from "./domain/documentos.entity";
import { useDocumento } from "./hooks/useDocumento";
import { DialogConfirmacion } from "@/components/dialogs/eliminarRow";

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

  console.log(documentos);

  const actualizarDocumento = (documento: Documento) => {
    /*setUsuarios((prev) =>
        prev.map((u) =>
          u.ID_usuario === usuarioActualizado.ID_usuario
            ? {
                ...usuarioActualizado,
                fecha_ingreso: usuarioActualizado.fecha_ingreso ? usuarioActualizado.fecha_ingreso.split("T")[0] : undefined,
              }
            : u
        )
      );*/
  };

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <Typography size="large" variant="h1">
          Mis documentos
        </Typography>
        <Button onClick={() => setModalAbierto(true)}>Agregar documento</Button>
      </div>
      {/*llamar la tabla documentos*/}
      <TablaDocumentos
        documentosData={documentos}
        onDocumentoEditado={actualizarDocumento}
        setDocumentos={setDocumentos}
      />
      {/* Modal para agregar/editar documento */}
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
