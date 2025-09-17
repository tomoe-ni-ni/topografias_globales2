import { ClienteService } from "../infra/cliente.service";
import { Cliente } from "./cliente.entity";


export async function obtenerClientes() {
  return ClienteService.getClientes();
}

export async function crearCliente(cliente: Cliente) {
  return ClienteService.crearCliente(cliente);
}

export async function actualizarCliente(cliente: Cliente) {
  return ClienteService.actualizarCliente(cliente);
}

export async function eliminaCliente(id: number) {
  return ClienteService.eliminarCliente(id);
}