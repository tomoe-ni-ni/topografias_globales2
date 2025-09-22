import { Area } from "../domain/area.entity";

export const AreaService = {
    async getAreas(): Promise<Area[]> {
        const res = await fetch(`/api/area`);
        if (!res.ok) throw new Error("Error al obtener areas");
        return res.json();
    },
    async crearArea(
        area: Omit<Area, "ID_area" | "created_at" | "updated_at">
    ): Promise<Area> {
        const res = await fetch("/api/area", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(area),
        });
        if (!res.ok) throw new Error("Error al crear area");
        return res.json();
    },
    async actualizarArea(area: Partial<Area>): Promise<Area> {
        const res = await fetch(`/api/area/${area.ID_area}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(area),
        });
        if (!res.ok) throw new Error("Error al actualizar area");
        return res.json();
    },
    async eliminarArea(id: number): Promise<void> {
        const res = await fetch(`/api/area/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Error al eliminar area");
    },
};
