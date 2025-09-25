import { z } from "zod";

export const editProyectoSchema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  descripcion: z.string().min(1, "La descripción es obligatoria"),
});

export type EditProyectoSchema = z.infer<typeof editProyectoSchema>;