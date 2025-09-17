import { EstadoUsuario, RolUsuario } from "@/enums";
import { z } from "zod";

export const createClientSchema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  apellidos: z.string().min(1, "Los apellidos son obligatorios"),
  email: z.string().email("Correo inválido"),
  telefono: z.string().min(9, "El teléfono es obligatorio").max(9, "El teléfono es muy largo"),
  direccion: z.string().min(1, "La dirección es obligatoria"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  rol: z.nativeEnum(RolUsuario),
  estado: z.nativeEnum(EstadoUsuario),
});

export type CreateClientSchema = z.infer<typeof createClientSchema>;
