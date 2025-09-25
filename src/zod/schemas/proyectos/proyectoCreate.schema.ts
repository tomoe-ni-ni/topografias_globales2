import { z } from "zod";

export const createProyectoSchema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  descripcion: z.string().min(1, "La descripción es obligatoria"),
});

export type CreateProyectoSchema = z.infer<typeof createProyectoSchema>;    