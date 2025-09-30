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

import { Proyecto } from "../domain/proyecto.entity";
import { useTableProyecto } from "../hooks/useTablaProyecto";
import EditarProyecto from "./editarProyecto";

export function TablaProyecto({
  proyectos,
  setProyectos,
}: {
  proyectos: Proyecto[];
  setProyectos: Dispatch<SetStateAction<Proyecto[]>>;
}) {
  const {
    proyectosFiltrados,
    busqueda,
    setBusqueda,
    proyectoSeleccionado,
    setProyectoSeleccionado,
    openEliminarDialog,
    setOpenEliminarDialog,
    eliminarProyectoSeleccionado,
    modalAbiertoEditar,
    setModalAbiertoEditar,
    editarProyecto,
    formEditar,
    dataToRender,
  } = useTableProyecto({ proyectos, setProyectos });

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar proyecto..."
          className="pl-8"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID Proyecto</TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Descripción</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataToRender.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-4">
                  No se encontraron resultados
                </TableCell>
              </TableRow>
            ) : (
              dataToRender.map((proyecto) => (
                <TableRow key={proyecto.ID_proyecto}>
                  <TableCell>{proyecto.ID_proyecto}</TableCell>
                  <TableCell>{proyecto.nombre}</TableCell>
                  <TableCell>{proyecto.descripcion}</TableCell>
                  <TableCell
                    className="text-right"
                    onClick={() => setProyectoSeleccionado(proyecto)}
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
        onConfirm={eliminarProyectoSeleccionado}
        confirmText="Sí, eliminar"
        cancelText="Cancelar"
        confirmVariant="destructive"
      />

      <EditarProyecto
        modalAbierto={modalAbiertoEditar}
        setModalAbierto={setModalAbiertoEditar}
        formEditar={formEditar}
        editarProyecto={editarProyecto}
      />
    </div>
  );
}
