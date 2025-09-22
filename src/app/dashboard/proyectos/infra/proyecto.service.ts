import { Proyecto } from "../domain/proyecto.entity";

export const ProyectoService = {
  async getProyectos(): Promise<Proyecto[]> {
    const res = await fetch(`/api/proyectos`);
    if (!res.ok) throw new Error("Error al obtener proyectos");
    return res.json();
  },
  async crearProyecto(
    proyecto: Omit<Proyecto, "ID_proyecto" | "created_at" | "updated_at">
  ): Promise<Proyecto> {
    const res = await fetch("/api/proyectos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(proyecto),
    });
    if (!res.ok) throw new Error("Error al crear proyecto");
    return res.json();
  },
  async actualizarProyecto(proyecto: Partial<Proyecto>): Promise<Proyecto> {
    const res = await fetch(`/api/proyectos/${proyecto.ID_proyecto}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(proyecto),
    });
    if (!res.ok) throw new Error("Error al actualizar proyecto");
    return res.json();
  },
  async eliminarProyecto(id: number): Promise<void> {
    const res = await fetch(`/api/proyectos/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Error al eliminar proyecto");
  },
};
