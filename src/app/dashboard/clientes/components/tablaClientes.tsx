"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { MoreVertical, Pencil, Search, Trash2 } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

import { DialogConfirmacion } from "@/components/dialogs/eliminarRow";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Cliente } from "../domain/cliente.entity";
import { useTableCliente } from "../hooks/useTableCliente";
import EditarCliente from "./editarClientes";

export function TablaClientes({
  clientes,
  setClientes,
}: {
  clientes: Cliente[];
  setClientes: Dispatch<SetStateAction<Cliente[]>>;
}) {
  const {
    clientesFiltrados,
    busqueda,
    paginaActual,
    clienteSeleccionado,
    setClienteSeleccionado,
    setBusqueda,
    setPaginaActual,
    setClientesFiltrados,
    openEliminarDialog,
    setOpenEliminarDialog,
    eliminarCliente,
    modalVer,
    setModalVer,
    modalAbiertoEditar,
    setModalAbiertoEditar,
    editarCliente,
    formEditar,
    departamentos,
    provincias,
    dataToRender,
  } = useTableCliente({ clientes, setClientes });

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar por nombre o código de documento..."
          className="pl-8"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="cursor-pointer hover:bg-muted/50">
                <div className="flex items-center">Id Cliente</div>
              </TableHead>
              <TableHead className="cursor-pointer hover:bg-muted/50">
                <div className="flex items-center">Nombre</div>
              </TableHead>
              <TableHead className="cursor-pointer hover:bg-muted/50">
                <div className="flex items-center">Apellido</div>
              </TableHead>
              <TableHead className="cursor-pointer hover:bg-muted/50">
                <div className="flex items-center">Departamento</div>
              </TableHead>
              <TableHead className="cursor-pointer hover:bg-muted/50">
                <div className="flex items-center">Provincia</div>
              </TableHead>
              <TableHead className="ursor-pointer hover:bg-muted/50">
                <div className="flex items-center">Acciones</div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataToRender.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-4">
                  No se encontraron resultados
                </TableCell>
              </TableRow>
            ) : (
              dataToRender.map((cliente) => (
                <TableRow key={cliente.ID_cliente}>
                  <TableCell>{cliente.ID_cliente}</TableCell>
                  <TableCell>{cliente.nombre}</TableCell>
                  <TableCell>{cliente.apellido}</TableCell>
                  <TableCell>{cliente.nombre_departamento}</TableCell>
                  <TableCell>{cliente.nombre_provincia}</TableCell>
                  <TableCell
                    className="text-right"
                    onClick={() => setClienteSeleccionado(cliente)}
                  >
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                          <span className="sr-only">Abrir menú</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => setModalAbiertoEditar(true)}
                        >
                          <Pencil className="mr-2 h-4 w-4" />
                          <span>Editar</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setOpenEliminarDialog(true)}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Eliminar</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <DialogConfirmacion
        open={openEliminarDialog}
        onOpenChange={setOpenEliminarDialog}
        title="¿Estás seguro?"
        description="Esta acción no se puede deshacer."
        onConfirm={eliminarCliente}
        confirmText="Sí, eliminar"
        cancelText="Cancelar"
        confirmVariant="destructive"
      />

      <EditarCliente
        modalAbiertoEditar={modalAbiertoEditar}
        setModalAbiertoEditar={setModalAbiertoEditar}
        formEditar={formEditar}
        editarCliente={editarCliente}
        departamentos={departamentos}
        provincias={provincias}
      />
    </div>
  );
}
