import { EstadoUsuario, RolUsuario } from "@/enums";
import { z } from "zod";

export const createUserSchema = z.object({
  nombre: z.string().min(1, "Campo requerido"),
  apellido: z.string().min(1, "Campo requerido"),
  correo: z.string().email("Correo inválido"),
  contrasena: z.string().min(6, "Mínimo 6 caracteres"),
  rol: z.nativeEnum(RolUsuario),
  estado: z.nativeEnum(EstadoUsuario),
  ID_area: z.union([z.string(), z.undefined()]),
});

export type CreateUserSchema = z.infer<typeof createUserSchema>;
