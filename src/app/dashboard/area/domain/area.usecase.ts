import { AreaService } from "../infra/area.service";
import { Area } from "./area.entity";


export async function obtenerAreas() {
    return AreaService.getAreas();
}

export async function crearArea(area: Area) {
    return AreaService.crearArea(area);
}

export async function actualizarArea(area: Area) {
    return AreaService.actualizarArea(area);
}

export async function eliminaArea(id: number) {
    return AreaService.eliminarArea(id);
}
