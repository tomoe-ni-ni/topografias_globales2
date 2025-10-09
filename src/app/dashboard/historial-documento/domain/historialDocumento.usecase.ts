import { DocumentoHistorialService } from "../infra/historialDocumento.service";
import { historialDocumentoForm } from "./historialDocumento.entity";

export async function obtenerDocumentoById(id: number) {
  return DocumentoHistorialService.getDocumentoById(id);
}

export async function obtenerHistorialesByDocumento(id: number) {
  return DocumentoHistorialService.getHistorialesByDocumento(id);
}

export async function crearHistorialDocumento(
  historial: historialDocumentoForm
) {
  return DocumentoHistorialService.crearHistorialDocumento(historial);
}

export async function eliminaHistorialDocumento(id: number) {
  return DocumentoHistorialService.eliminarHistorialDocumento(id);
}
