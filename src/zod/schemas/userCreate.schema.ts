import { EstadoUsuario, RolUsuario } from "@/enums";
import { z } from "zod";
export const createUserSchema = z.object({
  password: z.string().min(6, "Mínimo 6 caracteres"),
  rol: z.nativeEnum(RolUsuario),
  nombre: z.string().min(1, "Campo requerido"),
  estado: z.nativeEnum(EstadoUsuario)
});

export type CreateUserSchema = z.infer<typeof createUserSchema>;
