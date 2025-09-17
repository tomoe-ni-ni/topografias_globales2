import { z } from "zod";

export const loginSchema = z.object({
  correo: z.string().min(1, "El usuario es obligatorio"),
  contrasena: z.string().min(1, "La contraseña es obligatoria"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
