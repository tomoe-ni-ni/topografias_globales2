import { DocumentoService } from "../../documentos/infra/documentos.service";
import { DocumentoForm, DocumentoFormEdit } from "../../documentos/domain/documentos.entity";
import { DocumentoHistorialService } from "../infra/historialDocumento.service";

export async function obtenerDocumentoById(id: number) {
  return DocumentoHistorialService.getDocumentoById(id);
}
