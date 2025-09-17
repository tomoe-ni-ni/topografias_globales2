export type Tarea = {
  id?: number;
  asignado_a?: number;
  titulo: string;
  descripcion?: string;
  estado: "pendiente" | "completada";
  created_at?: string;
  updated_at?: string;
};
