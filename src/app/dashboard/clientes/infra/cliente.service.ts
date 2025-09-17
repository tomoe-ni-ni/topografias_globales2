import { Cliente } from "../domain/cliente.entity";


export const ClienteService = {
  async getClientes(): Promise<Cliente[]> {
    const res = await fetch(`/api/clientes`);
    if (!res.ok) throw new Error("Error al obtener clientes");
    return res.json();
  },
  async crearCliente(
    cliente: Omit<Cliente, "ID_cliente" | "created_at" | "updated_at">
  ): Promise<Cliente> {
    const res = await fetch("/api/clientes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cliente),
    });
    if (!res.ok) throw new Error("Error al crear cliente");
    return res.json();
  },
  async actualizarCliente(cliente: Partial<Cliente>): Promise<Cliente> {
    const res = await fetch(`/api/clientes/${cliente.ID_cliente}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cliente),
    });
    if (!res.ok) throw new Error("Error al actualizar cliente");
    return res.json();
  },
  async eliminarCliente(id: number): Promise<void> {
    const res = await fetch(`/api/clientes/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Error al eliminar cliente");
  },
};
