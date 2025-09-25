import { DocumentoService } from "../infra/documentos.service";
import { Documento, DocumentoForm, DocumentoFormEdit } from "./documentos.entity";

export async function obtenerDocumentos() {
  return DocumentoService.getDocumentos();
}

export async function crearDocumento(documento: DocumentoForm) {
  return DocumentoService.crearDocumento(documento);
}

export async function actualizarDocumento(documento: DocumentoFormEdit) {
  return DocumentoService.actualizarDocumento(documento);
}

export async function eliminaDocumento(id: number) {
  return DocumentoService.eliminarDocumento(id);
}
