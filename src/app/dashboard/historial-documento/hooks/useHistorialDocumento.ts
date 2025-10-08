import { useEffect, useState } from "react";
import { Documento } from "../../documentos/domain/documentos.entity";
import { obtenerDocumentoById } from "../domain/historialDocumento.usecase";

export function useHistorialDocumento({ id }: { id: number }) {
  const [documento, setDocumento] = useState<Documento>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    obtenerDocumentoById(id)
      .then(setDocumento)
      .finally(() => setLoading(false));
  }, [id]);

  return { documento, loading };
}
