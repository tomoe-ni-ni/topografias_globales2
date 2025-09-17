import { Tarea } from "../domain/deberes.entity";

export const TareaService = {
  async getTareas(asignado_a: number): Promise<Tarea[]> {
    const res = await fetch(`/api/deberes?asignado_a=${asignado_a}`);
    if (!res.ok) throw new Error("Error al obtener tareas");
    return res.json();
  },
  async crearTarea(
    tarea: Omit<Tarea, "id" | "created_at" | "updated_at">
  ): Promise<Tarea> {
    const res = await fetch("/api/deberes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tarea),
    });
    if (!res.ok) throw new Error("Error al crear tarea");
    return res.json();
  },
  async actualizarTarea(tarea: Partial<Tarea>): Promise<Tarea> {
    const res = await fetch(`/api/deberes/${tarea.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tarea),
    });
    if (!res.ok) throw new Error("Error al actualizar tarea");
    return res.json();
  },
  async eliminarTarea(id: number): Promise<void> {
    const res = await fetch(`/api/deberes/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Error al eliminar tarea");
  },
};
