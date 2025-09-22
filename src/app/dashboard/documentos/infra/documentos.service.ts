import { Documento, DocumentoForm } from "../domain/documentos.entity";

export const DocumentoService = {
  async getDocumentos(): Promise<Documento[]> {
    const res = await fetch(`/api/documentos`);
    if (!res.ok) throw new Error("Error al obtener documentos");
    return res.json();
  },
  async crearDocumento(
    documento: Omit<DocumentoForm, "ID_documento" | "created_at" | "updated_at">
  ): Promise<Documento> {
    const res = await fetch("/api/documentos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(documento),
    });
    if (!res.ok) throw new Error("Error al crear documento");
    return res.json();
  },
  async actualizarDocumento(documento: Partial<Documento>): Promise<Documento> {
    const res = await fetch(`/api/documento/${documento.ID_documento}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(documento),
    });
    if (!res.ok) throw new Error("Error al actualizar documento");
    return res.json();
  },
  async eliminarDocumento(id: number): Promise<void> {
    const res = await fetch(`/api/documentos/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Error al eliminar documento");
  },
};
