import { z } from "zod";

export const createHistorialDocumentoSchema = z.object({
  documento_historial: z.any(),
  ID_estado_documento: z
    .string()
    .min(1, "El estado del documento es obligatorio"),
  descripcion: z.string().min(1, "La descripción es obligatoria"),
});

export type CreateHistorialDocumentoSchema = z.infer<typeof createHistorialDocumentoSchema>;
