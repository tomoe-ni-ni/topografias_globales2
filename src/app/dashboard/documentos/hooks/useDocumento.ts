import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Documento } from "../domain/documentos.entity";
import {
  crearDocumento,
  obtenerDocumentos,
} from "../domain/documentos.usecase";
import { TipoDocumento } from "@/enums";

export function useDocumento() {
  const { data: session } = useSession();
  const [documentos, setDocumentos] = useState<Documento[]>([]);
  const [loading, setLoading] = useState(false);
  const [nombreDocumento, setNombreDocumento] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState<TipoDocumento>(
    TipoDocumento.planos
  );
  const [fecha_ingreso, setFecha_ingreso] = useState("");
  const [archivo, setArchivo] = useState<File|null>(null);
  const [folio, setFolio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [ID_cliente, setID_cliente] = useState(0);
  const [ID_proyecto, setID_proyecto] = useState(0);
  const [ID_estado_documento, setID_estado_documento] = useState(0);
  const [ID_area, setID_area] = useState(0);
  const [modalAbierto, setModalAbierto] = useState(false);

  useEffect(() => {
    if (session?.user.ID_usuario) {
      setLoading(true);
      obtenerDocumentos()
        .then(setDocumentos)
        .finally(() => setLoading(false));
    }
  }, [session?.user.ID_usuario]);

  const agregarDocumento = async () => {
    if (session?.user.ID_usuario) return;
    const documento: Documento = {
      nombre_documento: nombreDocumento,
      tipo_documento: tipoDocumento,
      fecha_ingreso: fecha_ingreso,
      archivo: archivo,
      descripcion: descripcion,
      folio: folio,
      ID_cliente: ID_cliente,
      ID_proyecto: ID_proyecto,
      ID_estado_documento: ID_estado_documento,
      ID_area: ID_area,
    };

    try {
      const nueva = await crearDocumento(documento);
      setDocumentos((prev) => [...prev, nueva]);
      setNombreDocumento("");
      setTipoDocumento(TipoDocumento.planos);
      setFecha_ingreso("");
      setArchivo("");
      setFolio("");
      setDescripcion("");
      setID_cliente(0);
      setID_proyecto(0);
      setID_estado_documento(0);
      setID_area(0);
      setModalAbierto(false);
    } catch (error) {
      console.error("Error al crear la tarea:", error);
    }
  };

  return {
    documentos,
    loading,
    modalAbierto,
    setModalAbierto,
    agregarDocumento,
    nombreDocumento,
    setNombreDocumento,
    tipoDocumento,
    setTipoDocumento,
    fecha_ingreso,
    setFecha_ingreso,
    archivo,
    setArchivo,
    folio,
    setFolio,
    descripcion,
    setDescripcion,
    ID_cliente,
    setID_cliente,
    ID_proyecto,
    setID_proyecto,
    ID_estado_documento,
    setID_estado_documento,
    ID_area,
    setID_area,
  };
}
