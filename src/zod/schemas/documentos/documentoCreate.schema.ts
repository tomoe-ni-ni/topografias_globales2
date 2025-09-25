import { z } from "zod";

export const createDocumentoSchema = z.object({
  nombre_documento: z.string().min(1, "El nombre del documento es obligatorio"),
  tipo_documento: z.string().min(1, "El tipo de documento es obligatorio"),
  archivo: z.any(),
  folio: z.string().min(1, "El folio es obligatorio"),
  descripcion: z.string().min(1, "La descripción es obligatoria"),
  ID_cliente: z.string().min(1, "El cliente es obligatorio"),
  ID_proyecto: z.string().min(1, "El proyecto es obligatorio"),
  ID_estado_documento: z
    .string()
    .min(1, "El estado del documento es obligatorio"),
  ID_area: z.string().min(1, "La área es obligatoria"),
});

export type CreateDocumentoSchema = z.infer<typeof createDocumentoSchema>;
