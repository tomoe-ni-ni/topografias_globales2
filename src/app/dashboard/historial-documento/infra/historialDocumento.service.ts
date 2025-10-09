import { Documento } from "../../documentos/domain/documentos.entity";
import { HistorialDocumento, historialDocumentoForm } from "../domain/historialDocumento.entity";

export const DocumentoHistorialService = {
  async getDocumentoById(id: number): Promise<Documento> {
    const res = await fetch(`/api/documentos/${id}`);
    if (!res.ok) throw new Error("Error al obtener documento");
    return res.json();
  },

  async getHistorialesByDocumento(id: number): Promise<HistorialDocumento[]> {
    const res = await fetch(`/api/historial-documento/${id}`);
    if (!res.ok) throw new Error("Error al obtener historiales");
    return res.json();
  },
  async crearHistorialDocumento(historial: historialDocumentoForm): Promise<HistorialDocumento> {
    const res = await fetch("/api/historial-documento", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(historial),
    });
    if (!res.ok) throw new Error("Error al crear el historial");
    return res.json();
  },
  async eliminarHistorialDocumento(id: number): Promise<void> {
    const res = await fetch(`/api/historial-documento/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Error al eliminar el historial");
  },
};