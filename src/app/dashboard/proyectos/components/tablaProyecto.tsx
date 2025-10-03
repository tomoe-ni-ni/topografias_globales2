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
import {
  ArrowDown,
  ArrowUp,
  MoreVertical,
  Pencil,
  Search,
  Trash2,
} from "lucide-react";
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
import { Paginacion } from "@/components/paginacion";

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
    paginaActual,
    proyectoSeleccionado,
    ordenarPor,
    ordenDireccion,
    elementosPorPagina,
    proyectosPaginados,
    setProyectoSeleccionado,
    setBusqueda,
    setPaginaActual,
    ordenarProyectos,
    openEliminarDialog,
    setOpenEliminarDialog,
    eliminarProyectoSeleccionado,
    modalAbiertoEditar,
    setModalAbiertoEditar,
    editarProyecto,
    formEditar,
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
              <TableHead
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => ordenarProyectos("ID_proyecto")}
              >
                <div className="flex items-center">
                  ID Proyecto
                  {ordenarPor === "ID_proyecto" &&
                    (ordenDireccion === "asc" ? (
                      <ArrowUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ArrowDown className="ml-1 h-4 w-4" />
                    ))}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => ordenarProyectos("nombre")}
              >
                <div className="flex items-center">
                  Nombre
                  {ordenarPor === "nombre" &&
                    (ordenDireccion === "asc" ? (
                      <ArrowUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ArrowDown className="ml-1 h-4 w-4" />
                    ))}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => ordenarProyectos("descripcion")}
              >
                <div className="flex items-center">
                  Descripción
                  {ordenarPor === "descripcion" &&
                    (ordenDireccion === "asc" ? (
                      <ArrowUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ArrowDown className="ml-1 h-4 w-4" />
                    ))}
                </div>
              </TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {proyectosPaginados.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-4">
                  No se encontraron resultados
                </TableCell>
              </TableRow>
            ) : (
              proyectosPaginados.map((proyecto) => (
                <TableRow key={proyecto.ID_proyecto}>
                  <TableCell>{proyecto.ID_proyecto}</TableCell>
                  <TableCell>{proyecto.nombre}</TableCell>
                  <TableCell>{proyecto.descripcion}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setProyectoSeleccionado(proyecto)}
                        >
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

      <Paginacion
        paginaActual={paginaActual}
        totalElementos={proyectosFiltrados.length}
        elementosPorPagina={elementosPorPagina}
        onCambioPagina={setPaginaActual}
      />

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