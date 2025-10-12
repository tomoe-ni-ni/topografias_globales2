import { useEffect, useState } from "react";
import { Documento } from "../../documentos/domain/documentos.entity";
import { obtenerDocumentoById } from "../domain/historialDocumento.usecase";

export function useHistorialDocumento({ id }: { id: number }) {
  const [documento, setDocumento] = useState<Documento>();
  const [loading, setLoading] = useState(false);

  const cargarDocumento = () => {
    setLoading(true);
    obtenerDocumentoById(id)
      .then(setDocumento)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    cargarDocumento();
  }, [id]);

  return { documento, loading, cargarDocumento };
}