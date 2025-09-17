import { Bloque } from "../domain/horario.entity";

export const HorarioService = {
  async getBloques(user_id: number): Promise<Bloque[]> {
    const res = await fetch(`/api/horarios?user_id=${user_id}`);
    if (!res.ok) throw new Error("Error al obtener bloques");
    return res.json();
  },

  async saveBloque(bloque: Bloque): Promise<Bloque> {
    const res = await fetch("/api/horarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bloque),
    });
    if (!res.ok) throw new Error("Error al guardar bloque");
    return res.json();
  },

  async updateBloque(bloque: Bloque): Promise<Bloque> {
    const res = await fetch(`/api/horarios/${bloque.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bloque),
    });
    if (!res.ok) throw new Error("Error al actualizar bloque");
    return res.json();
  },

  async deleteBloque(id: number): Promise<void> {
    const res = await fetch(`/api/horarios/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Error al eliminar bloque");
  },
};
