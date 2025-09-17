import { z } from "zod";

export const editClientForm = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  apellidos: z.string().min(1, "Los apellidos son obligatorios"),
  email: z.string().email("Correo inválido"),
  telefono: z
    .string()
    .min(9, "El teléfono es obligatorio")
    .max(9, "El teléfono es muy largo"),
  direccion: z.string().min(1, "La dirección es obligatoria"),
});

export type editClientForm = z.infer<typeof editClientForm>;
