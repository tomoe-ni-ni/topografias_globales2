import { z } from "zod";

export const userEditSchema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  //   rol: z.string().min(1, "El rol es obligatorio"),
  estado: z.string().min(1, "El estado es obligatorio"),
});

export type userEditSchema = z.infer<typeof userEditSchema>;
