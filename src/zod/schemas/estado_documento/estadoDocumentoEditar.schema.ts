import { z } from "zod";

export const editEstadoDocumentoSchema = z.object({
    estado: z.string().min(1, "El nombre del estado es obligatorio"),
});

export type EditEstadoDocumentoSchema = z.infer<typeof editEstadoDocumentoSchema>;