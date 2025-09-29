
import { z } from "zod";

export const createEstadoDocumentoSchema = z.object({
    estado: z.string().min(1, "El nombre del estado es obligatorio"),
});

export type CreateEstadoDocumentoSchema = z.infer<typeof createEstadoDocumentoSchema>;