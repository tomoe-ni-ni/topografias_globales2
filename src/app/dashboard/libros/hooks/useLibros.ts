import { useState, useEffect } from "react";
import { Libro } from "../domain/libro.entity";
import { LibroService } from "../infra/libro.service";
import { useSession } from "next-auth/react";

export function useLibros() {
  const { data: session } = useSession();
  const [libros, setLibros] = useState<Libro[]>([]);
  const [loading, setLoading] = useState(false);
  const [nuevoTitulo, setNuevoTitulo] = useState("");
  const [nuevoAutor, setNuevoAutor] = useState("");
  const [nuevoLibro, setNuevoLibro] = useState<File | null>(null);
  const [modalAbierto, setModalAbierto] = useState(false);

  useEffect(() => {
    if (session?.user.id) {
      setLoading(true);
      LibroService.getLibros()
        .then(setLibros)
        .finally(() => setLoading(false));
    }
  }, [session?.user.id]);

  const agregarLibro = async () => {
    if (!session?.user.id) return;
    const libro: Omit<Libro, "id"> = {
      asignado_a: Number(session.user.id),
      titulo: nuevoTitulo,
      autor: nuevoAutor,
      archivo: nuevoLibro ? URL.createObjectURL(nuevoLibro) : "",
    };

    try {
      if (nuevoLibro?.name.trim() === "") return;
      const nueva = await LibroService.crearLibro(libro);
      setLibros((prev) => [...prev, nueva]);
      setNuevoTitulo("");
      setNuevoAutor("");
      setNuevoLibro(null);
      setModalAbierto(false);
    } catch (error) {
      console.error("Error al crear el libro:", error);
    }
  };

  const eliminarLibro = async (id: number) => {
    await LibroService.eliminarLibro(id);
    setLibros((prev) => prev.filter((l) => l.id !== id));
  };

  return {
    libros,
    agregarLibro,
    nuevoAutor,
    nuevoLibro,
    nuevoTitulo,
    setNuevoAutor,
    setNuevoLibro,
    setNuevoTitulo,
    setModalAbierto,
    loading,
    eliminarLibro,
    modalAbierto
  };
}
