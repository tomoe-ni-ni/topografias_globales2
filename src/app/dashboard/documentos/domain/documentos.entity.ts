export type Documento = {
  ID_documento?: number;
  nombre_documento: string;
  tipo_documento: string;
  archivo: string;
  descripcion?: string;
  folio: string;
  ID_cliente: number;
  ID_proyecto: number;
  ID_estado_documento: number;
  ID_area: number;
  ID_usuario?: string;
};

export type DocumentoForm = {
  nombre_documento: string;
  tipo_documento: string;
  archivo: string | File;
  folio: string;
  descripcion: string;
  ID_cliente: number;
  ID_proyecto: number;
  ID_estado_documento: number;
  ID_area: number;
  ID_usuario?: number;
};
