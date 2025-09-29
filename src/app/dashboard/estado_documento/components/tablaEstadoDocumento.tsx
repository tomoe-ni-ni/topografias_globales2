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

import { EstadoDocumento } from "../domain/estado.entity";
import { useTableEstadoDocumento } from "../hooks/useTableEstado";
import EditarEstadoDocumento from "./editarEstadoDocumento";

export function TablaEstadoDocumento({
  estadoData,
  setEstados,
}: {
  estadoData: EstadoDocumento[];
  setEstados: Dispatch<SetStateAction<EstadoDocumento[]>>;
}) {
  const {
    estadosFiltrados,
    busqueda,
    setBusqueda,
    estadoSeleccionado,
    setEstadoSeleccionado,
    openEliminarDialog,
    setOpenEliminarDialog,
    eliminarEstadoDocumento,
    modalAbiertoEditar,
    setModalAbiertoEditar,
    editarEstadoDocumento,
    formEditar,
  } = useTableEstadoDocumento({ estados: estadoData, setEstados });

  // Filtrar estados por búsqueda
  const dataToRender =
    busqueda.trim().length > 0
      ? estadoData.filter((est) =>
          est.estado.toLowerCase().includes(busqueda.toLowerCase())
        )
      : estadoData;

  return (
    <div className="space-y-4">
      {/* Barra de búsqueda */}
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar estado..."
          className="pl-8"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      {/* Tabla */}
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="cursor-pointer hover:bg-muted/50">
                <div className="flex items-center">ID Estado</div>
              </TableHead>
              <TableHead className="cursor-pointer hover:bg-muted/50">
                <div className="flex items-center">Estado</div>
              </TableHead>
              <TableHead className="cursor-pointer hover:bg-muted/50">
                <div className="flex items-center">Acciones</div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataToRender.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center py-4">
                  No se encontraron resultados
                </TableCell>
              </TableRow>
            ) : (
              dataToRender.map((estado) => (
                <TableRow key={estado.ID_estado}>
                  <TableCell>{estado.ID_estado}</TableCell>
                  <TableCell>{estado.estado}</TableCell>
                  <TableCell
                    className="text-right"
                    onClick={() => setEstadoSeleccionado(estado)}
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

      {/* Dialog Confirmación Eliminar */}
      <DialogConfirmacion
        open={openEliminarDialog}
        onOpenChange={setOpenEliminarDialog}
        title="¿Estás seguro?"
        description="Esta acción no se puede deshacer."
        onConfirm={eliminarEstadoDocumento}
        confirmText="Sí, eliminar"
        cancelText="Cancelar"
        confirmVariant="destructive"
      />

      {/* Modal de Editar */}
      <EditarEstadoDocumento
        modalAbiertoEditar={modalAbiertoEditar}
        setModalAbiertoEditar={setModalAbiertoEditar}
        formEditar={formEditar}
        editarEstado={editarEstadoDocumento}
        estadoSeleccionado={estadoSeleccionado}
      />
    </div>
  );
}
