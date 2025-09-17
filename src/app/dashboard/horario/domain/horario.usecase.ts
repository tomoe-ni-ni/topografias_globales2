import { HorarioService } from "../infra/horario.service";
import { Bloque } from "./horario.entity";

export async function obtenerBloques(user_id: number) {
  return HorarioService.getBloques(user_id);
}

export async function crearBloque(bloque: Bloque) {
  return HorarioService.saveBloque(bloque);
}

export async function actualizarBloque(bloque: Bloque) {
  return HorarioService.updateBloque(bloque);
}

export async function eliminarBloque(id: number) {
  return HorarioService.deleteBloque(id);
}
