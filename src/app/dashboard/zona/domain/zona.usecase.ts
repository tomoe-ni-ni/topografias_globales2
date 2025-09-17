import { ZonaService } from "../infra/zona.service";
import { Zona } from "./zona.entity";

export async function obtenerZonas() {
  return ZonaService.getZonas();
}

export async function crearZona(zona: Zona) {
  return ZonaService.crearZona(zona);
}

export async function actualizarZona(zona: Zona) {
  return ZonaService.actualizarZona(zona);
}

export async function eliminaZona(id: number) {
  return ZonaService.eliminarZona(id);
}