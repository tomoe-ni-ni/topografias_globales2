import { EstadoDocumento } from "../domain/estado.entity";

export const EstadoDocumentoService = {
  async getEstados(): Promise<EstadoDocumento[]> {
    const res = await fetch(`/api/estado_documento`);
    if (!res.ok) throw new Error("Error al obtener estados de documento");
    return res.json();
  },
  async crearEstado(
    estado: Omit<EstadoDocumento, "ID_estado">
  ): Promise<EstadoDocumento> {
    const res = await fetch("/api/estado_documento", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(estado),
    });
    if (!res.ok) throw new Error("Error al crear estado de documento");
    return res.json();
  },
  async actualizarEstado(estado: Partial<EstadoDocumento>): Promise<EstadoDocumento> {
    const res = await fetch(`/api/estado_documento/${estado.ID_estado}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(estado),
    });
    if (!res.ok) throw new Error("Error al actualizar estado de documento");
    return res.json();
  },
  async eliminarEstado(id: number): Promise<void> {
    const res = await fetch(`/api/estado_documento/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Error al eliminar estado de documento");
  },
};