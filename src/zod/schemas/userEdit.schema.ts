import { z } from "zod";

export const userEditSchema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  ID_area: z.string().min(1, "El area es obligatorio"),
  estado: z.string().min(1, "El estado es obligatorio"),
});

export type userEditSchema = z.infer<typeof userEditSchema>;
