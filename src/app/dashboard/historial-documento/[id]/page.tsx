"use client";
import { useParams } from "next/navigation";
import { DocumentoDetalle } from "../components/documento-detalle";
import { TablaHistorialDocumento } from "../components/tabla-historial-documento";
import { useHistorialDocumento } from "../hooks/useHistorialDocumento";
import { useHistoriales } from "../hooks/useHistoriales";

export default function DocumentoPage() {
  const params = useParams();

  const { documento, loading: loadingDoc } = useHistorialDocumento({
    id: Number(params.id),
  });

  const { historiales, loading: loadingHist } = useHistoriales({
    id: Number(params.id),
  });

  if (loadingDoc) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      <DocumentoDetalle documento={documento} />
      
      <div>
        <h2 className="text-xl font-semibold mb-4">Historial de Cambios</h2>
        <TablaHistorialDocumento historiales={historiales} />
      </div>
    </div>
  );
}