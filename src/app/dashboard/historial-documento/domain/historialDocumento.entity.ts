import { Usuarios } from "@/types/usuarios";
import { Documento } from "../../documentos/domain/documentos.entity";
import { EstadoDocumento } from "../../estado_documento/domain/estado.entity";

export type HistorialDocumento = {
  ID_historial?: number;
  documento_historial: string;
  descripcion: string;

  ID_documento: number;
  ID_usuario: number;
  ID_estado_documento: number;

  documento: Documento;
  estado: EstadoDocumento;
  usuario: Usuarios;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
};

export type historialDocumentoForm = {
  ID_historial?: number;
  documento_historial: string;
  ID_documento: number;
  ID_usuario: number;
  descripcion: string;
  ID_estado_documento: number;
};
