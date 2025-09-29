import { z } from "zod";

export const editClienteSchema = z.object({
  nombre: z.string().min(1, "El nombre del cliente es obligatorio"),
  apellido: z.string().optional(),
  nombre_departamento: z
    .string()
    .min(1, "El nombre del departamento es obligatorio"),
  nombre_provincia: z
    .string()
    .min(1, "El nombre de la provincia es obligatorio"),
});

export type EditClienteSchema = z.infer<typeof editClienteSchema>;
