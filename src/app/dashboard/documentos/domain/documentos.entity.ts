export type Documento = {
  ID_documento?: number;
  nombre_documento: string;
  tipo_documento?: string;
  fecha_ingreso?: string;
  archivo?: string;
  descripcion?: string;
  folio?: string;
  ID_cliente?: number;
  ID_proyecto?: number;
  ID_estado_documento?: number;
  ID_area?: number;
};
