"use client";
import { Typography } from "@/components/ui/typography";
import { useDocumento } from "./hooks/useDocumento";
import { useCliente } from "../clientes/hooks/useCliente";
import { useProyecto } from "../proyectos/hooks/useproyecto";
import { useEstado } from "../estado_documento/hooks/useestado";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TipoDocumento } from "@/enums";
import { ChangeEvent, useState } from "react";
import { useArea } from "../area/hooks/usearea";
import { TablaDocumentos } from "./components/tabla-documentos";
import { Documento } from "./domain/documentos.entity";

export default function Documentos() {
  const {
    documentos,
    loading,
    modalAbierto,
    setModalAbierto,
    agregarDocumento,
    form,
    setForm,
    archivoState,
    setArchivoState,
  } = useDocumento();

  const { clientes } = useCliente();
  const { proyectos } = useProyecto();
  const { estados } = useEstado();
  const { areas } = useArea();

  console.log(documentos);
  const handleArchivo = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (!file) return;
    setArchivoState(file);
    setForm((prev) => ({ ...prev, archivo: file }));
  };

  // Subida y registro de documento
  const handleAgregarDocumento = async () => {
    let archivoPath: string | null = null;
    if (archivoState) {
      const formData = new FormData();
      formData.append("file", archivoState);
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.error) {
        alert("Error al subir archivo: " + data.error);
        return;
      }
      archivoPath = data.path;
      setForm((prev) => ({ ...prev, archivo: archivoPath ?? "" }));
    }
    await agregarDocumento();
    setArchivoState(null);
  };
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
  
  
    const eliminarDocumento = (id: number | string | null | undefined) => {
      //setUsuarios((prev) => prev.filter((u) => u.ID_usuario !== id));
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
      <TablaDocumentos documentosData={documentos} onDocumentoEditado={actualizarDocumento} onDocumentoEliminado={eliminarDocumento} />
      
    </>
  );
}
