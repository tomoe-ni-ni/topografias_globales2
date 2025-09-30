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

import { Area } from "../domain/area.entity";
import { useTableArea } from "../hooks/useTablaArea";
import EditarArea from "./editarArea";

export function TablaArea({
  areas,
  setAreas,
}: {
  areas: Area[];
  setAreas: Dispatch<SetStateAction<Area[]>>;
}) {
  const {
    busqueda,
    setBusqueda,
    areaSeleccionada,
    setAreaSeleccionada,
    openEliminarDialog,
    setOpenEliminarDialog,
    eliminarAreaSeleccionada,
    modalAbiertoEditar,
    setModalAbiertoEditar,
    editarArea,
    formEditar,
  } = useTableArea({ areas, setAreas });

  const dataToRender =
    busqueda.trim().length > 0
      ? areas.filter((a) =>
          a.nombre.toLowerCase().includes(busqueda.toLowerCase())
        )
      : areas;

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar área..."
          className="pl-8"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID Área</TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
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
              dataToRender.map((area) => (
                <TableRow key={area.ID_area ?? area.nombre}>
                  <TableCell>{area.ID_area}</TableCell>
                  <TableCell>{area.nombre}</TableCell>
                  <TableCell
                    className="text-right"
                    onClick={() => setAreaSeleccionada(area)}
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
        onConfirm={eliminarAreaSeleccionada}
        confirmText="Sí, eliminar"
        cancelText="Cancelar"
        confirmVariant="destructive"
      />

      <EditarArea
        modalAbierto={modalAbiertoEditar}
        setModalAbierto={setModalAbiertoEditar}
        form={formEditar}
        actualizarArea={editarArea}
      />
    </div>
  );
}
