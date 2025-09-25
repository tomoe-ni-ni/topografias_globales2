import { ClienteService } from "../infra/cliente.service";
import { Cliente, ClienteForm } from "./cliente.entity";


export async function obtenerClientes() {
  return ClienteService.getClientes();
}

export async function crearCliente(cliente: ClienteForm) {
  return ClienteService.crearCliente(cliente);
}

export async function actualizarCliente(cliente: ClienteForm) {
  return ClienteService.actualizarCliente(cliente);
}

export async function eliminaCliente(id: number) {
  return ClienteService.eliminarCliente(id);
}
