import { z } from "zod";

export const editAreaSchema = z.object({
    nombre: z.string().min(1, "El nombre del area es obligatorio"),
});

export type editAreaSchema = z.infer<typeof editAreaSchema>;