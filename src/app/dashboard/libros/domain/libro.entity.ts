export type Libro = {
  id: number;
  titulo: string;
  autor: string;
  archivo: string; // Ejemplo: "/libros/libro1.pdf"
  asignado_a: number; // ID del usuario que puede verlo
};
