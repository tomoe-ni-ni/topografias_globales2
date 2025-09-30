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
import { Eye, MoreVertical, Pencil, Search, Trash2 } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Documento } from "../domain/documentos.entity";
import { useTableDocumento } from "../hooks/useTableDocumento";

import { DialogConfirmacion } from "@/components/dialogs/eliminarRow";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DetallesDocumento from "./detallesDocumento";
import EditarDocumento from "./editarDocumento";

export function TablaDocumentos({
  documentosData,
  setDocumentos,
}: {
  documentosData: Documento[];
  setDocumentos: Dispatch<SetStateAction<Documento[]>>;
}) {
  const {
    documentosFiltrados,
    busqueda,
    paginaActual,
    documentoSeleccionado,
    setDocumentoSeleccionado,
    setBusqueda,
    setPaginaActual,
    setDocumentosFiltrados,
    eliminarDocumento,
    openEliminarDialog,
    setOpenEliminarDialog,
    modalVer,
    setModalVer,
    modalAbiertoEditar,
    setModalAbiertoEditar,
    formEditar,
    editarDocumento,
  } = useTableDocumento({ documentos: documentosData, setDocumentos });

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
                <div className="flex items-center">Id Documento</div>
              </TableHead>
              <TableHead className="cursor-pointer hover:bg-muted/50">
                <div className="flex items-center">Nombre Documento</div>
              </TableHead>
              <TableHead className="cursor-pointer hover:bg-muted/50">
                <div className="flex items-center">Nombre Cliente</div>
              </TableHead>
              <TableHead className="cursor-pointer hover:bg-muted/50">
                <div className="flex items-center">Estado</div>
              </TableHead>
              <TableHead className="cursor-pointer hover:bg-muted/50">
                <div className="flex items-center">Tipo</div>
              </TableHead>
              <TableHead className="ursor-pointer hover:bg-muted/50">
                <div className="flex items-center">Acciones</div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documentosData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-4">
                  No se encontraron resultados
                </TableCell>
              </TableRow>
            ) : (
              documentosData.map((documento) => (
                <TableRow key={documento.ID_documento}>
                  <TableCell>{documento.ID_documento}</TableCell>
                  <TableCell>{documento.nombre_documento}</TableCell>
                  <TableCell>
                    {documento.cliente?.nombre} {documento.cliente?.apellido}
                  </TableCell>
                  <TableCell>{documento.estado?.estado}</TableCell>
                  <TableCell>{documento.tipo_documento}</TableCell>
                  <TableCell
                    className="text-right"
                    onClick={() => setDocumentoSeleccionado(documento)}
                  >
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                          <span className="sr-only">Abrir menú</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setModalVer(true)}>
                          <Eye className="mr-2 h-4 w-4" />
                          <span>Ver</span>
                        </DropdownMenuItem>
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
        onConfirm={eliminarDocumento}
        confirmText="Sí, eliminar"
        cancelText="Cancelar"
        confirmVariant="destructive"
      />

      <DetallesDocumento
        documentoSeleccionado={documentoSeleccionado}
        setModalVer={setModalVer}
        modalVer={modalVer}
      />

      <EditarDocumento
        modalAbiertoEditar={modalAbiertoEditar}
        setModalAbiertoEditar={setModalAbiertoEditar}
        formEditar={formEditar}
        editarDocumento={editarDocumento}
        documentoSeleccionado={documentoSeleccionado}
      />
    </div>
  );
}
