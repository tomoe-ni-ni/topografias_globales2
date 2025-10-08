import { Documento } from "../../documentos/domain/documentos.entity";
import { HistorialDocumento } from "../domain/historialDocumento.entity";

export const DocumentoHistorialService = {
  async getDocumentoById(id: number): Promise<Documento> {
    const res = await fetch(`/api/documentos/${id}`);
    if (!res.ok) throw new Error("Error al obtener documento");
    return res.json();
  },

  async getHistorialesByDocumento(id: number): Promise<HistorialDocumento[]> {
    const res = await fetch(`/api/historial-documentos/${id}`);
    if (!res.ok) throw new Error("Error al obtener historiales");
    return res.json();
  },
};