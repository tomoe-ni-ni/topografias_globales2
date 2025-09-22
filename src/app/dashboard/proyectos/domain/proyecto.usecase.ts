import { ProyectoService } from "../infra/proyecto.service";
import { Proyecto } from "./proyecto.entity";

export async function obtenerProyectos() {
  return ProyectoService.getProyectos();
}

export async function crearProyecto(proyecto: Proyecto) {
  return ProyectoService.crearProyecto(proyecto);
}

export async function actualizarProyecto(proyecto: Proyecto) {
  return ProyectoService.actualizarProyecto(proyecto);
}

export async function eliminaProyecto(id: number) {
  return ProyectoService.eliminarProyecto(id);
}
