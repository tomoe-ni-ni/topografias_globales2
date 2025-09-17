import { TareaService } from "../infra/deberes.service";
import { Tarea } from "./deberes.entity";

export async function obtenerTareas(user_id: number) {
  return TareaService.getTareas(user_id);
}

export async function crearTarea(tarea: Tarea) {
  return TareaService.crearTarea(tarea);
}

export async function actualizarTarea(tarea: Tarea) {
  return TareaService.actualizarTarea(tarea);
}

export async function eliminaTarea(id: number) {
  return TareaService.eliminarTarea(id);
}
