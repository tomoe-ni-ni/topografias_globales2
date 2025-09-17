import { Zona } from "../domain/zona.entity";

export const ZonaService = {
  async getZonas(): Promise<Zona[]> {
    const res = await fetch(`/api/zonas`);
    if (!res.ok) throw new Error("Error al obtener zonas");
    return res.json();
  },
  async crearZona(
    zona: Omit<Zona, "ID_zona" | "created_at" | "updated_at">
  ): Promise<Zona> {
    const res = await fetch("/api/zona", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(zona),
    });
    if (!res.ok) throw new Error("Error al crear zona");
    return res.json();
  },
  async actualizarZona(zona: Partial<Zona>): Promise<Zona> {
    const res = await fetch(`/api/zona/${zona.ID_zona}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(zona),
    });
    if (!res.ok) throw new Error("Error al actualizar zona");
    return res.json();
  },
  async eliminarZona(id: number): Promise<void> {
    const res = await fetch(`/api/zona/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Error al eliminar zona");
  },
};
