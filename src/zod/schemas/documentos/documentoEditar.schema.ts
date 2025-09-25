import { z } from "zod";

export const editDocumentoSchema = z.object({
  nombre_documento: z.string().min(1, "El nombre del documento es obligatorio"),
  folio: z.string().min(1, "El folio es obligatorio"),
  descripcion: z.string().min(1, "La descripción es obligatoria"),
});

export type EditDocumentoSchema = z.infer<typeof editDocumentoSchema>;
