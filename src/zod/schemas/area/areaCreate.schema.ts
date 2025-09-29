import { z } from "zod";

export const createAreaSchema = z.object({
    nombre: z.string().min(1, "El nombre del area es obligatorio"),
});

export type CreateAreaSchema = z.infer<typeof createAreaSchema>;