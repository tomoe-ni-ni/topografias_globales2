import { Usuarios } from "@/types/usuarios";
import { Area } from "../../area/domain/area.entity";
import { Cliente } from "../../clientes/domain/cliente.entity";
import { Proyecto } from "../../proyectos/domain/proyecto.entity";
import { EstadoDocumento } from "../../estado_documento/domain/estado.entity";

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
  usuario?: Usuarios;
  area?: Area;
  cliente: Cliente;
  proyecto?: Proyecto;
  estado: EstadoDocumento;
  created_at?: string;
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

export type DocumentoFormEdit = {
  nombre_documento: string;
  folio: string;
  descripcion: string;
  ID_documento: number;
};
