import { EstadoDocumentoService } from "../infra/estado.service";
import { EstadoDocumento } from "./estado.entity";

export async function obtenerEstados() {
  return EstadoDocumentoService.getEstados();
}

export async function crearEstado(estado: EstadoDocumento) {
  return EstadoDocumentoService.crearEstado(estado);
}

export async function actualizarEstado(estado: EstadoDocumento) {
  return EstadoDocumentoService.actualizarEstado(estado);
}

export async function eliminarEstado(id: number) {
  return EstadoDocumentoService.eliminarEstado(id);
}