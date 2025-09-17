import { DocumentoService } from "../infra/documentos.service";
import { Documento } from "./documentos.entity";

export async function obtenerDocumentos() {
  return DocumentoService.getDocumentos();
}

export async function crearDocumento(documento: Documento) {
  return DocumentoService.crearDocumento(documento);
}

export async function actualizarDocumento(documento: Documento) {
  return DocumentoService.actualizarDocumento(documento);
}

export async function eliminaDocumento(id: number) {
  return DocumentoService.eliminarDocumento(id);
}
