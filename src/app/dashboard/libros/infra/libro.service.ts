import { Libro } from "../domain/libro.entity";

export const LibroService = {
  async getLibros(): Promise<Libro[]> {
    const res = await fetch("/api/libros");
    if (!res.ok) throw new Error("Error al obtener libros");
    return res.json();
  },
  async crearLibro(libro: Omit<Libro, "id">): Promise<Libro> {
    const res = await fetch("/api/libros", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(libro),
    });
    if (!res.ok) throw new Error("Error al crear libro");
    return res.json();
  },
  async actualizarLibro(id: number, libro: Partial<Libro>): Promise<Libro> {
    const res = await fetch(`/api/libros/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(libro),
    });
    if (!res.ok) throw new Error("Error al actualizar libro");
    return res.json();
  },
  async eliminarLibro(id: number): Promise<void> {
    const res = await fetch(`/api/libros/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Error al eliminar libro");
  },
};
