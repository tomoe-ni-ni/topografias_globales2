import { use } from "react";
import { Documento } from "../domain/documentos.entity";
import { useTableDocumento } from "../hooks/useTableDocumento";
import { ArrowDown, ArrowUp, Badge, ChevronLeft, ChevronRight, Eye, MoreVertical, Pencil, Search, Table, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import EditUserForm from "../../usuarios/components/EditUserForm";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { obtenerIniciales, coloresEstado } from "@/lib/utils";

export function TablaDocumentos({
  documentosData,
  onDocumentoEditado,
  onDocumentoEliminado,
}: {
  documentosData: Documento[];
  onDocumentoEditado: (documento: Documento) => void;
  onDocumentoEliminado: (ID_documento: number) => void;
}) {
  const {
    documentos,
    documentosFiltrados,
    busqueda,
    paginaActual,
    modalEliminar,
    modalEditar,
    documentoSeleccionado,
    setModalEliminar,
    setModalEditar,
    setDocumentoSeleccionado,
    setBusqueda,
    setPaginaActual,
    setDocumentosFiltrados,
    setDocumentos,
  } = useTableDocumento();
  return (
    <div className="space-y-4">
      {/* Barra de búsqueda */}
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar por nombre o código de documento..."
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
              <TableHead
                className="cursor-pointer hover:bg-muted/50"
              >
                <div className="flex items-center">
                  Usuario
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer hover:bg-muted/50"
              >
                <div className="flex items-center">
                  Apellido
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer hover:bg-muted/50"
              >
                <div className="flex items-center">
                  Correo
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer hover:bg-muted/50"
              >
                <div className="flex items-center">
                  Estado
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer hover:bg-muted/50"
              >
                Área
              </TableHead>
              <TableHead
                className="cursor-pointer hover:bg-muted/50"
              >
                <div className="flex items-center">
                  Fecha de ingreso
                </div>
              </TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documentos.length > 0
              ? documentos.map((documento) => (
                  <TableRow key={documento.ID_documento}>
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarFallback>
                            {obtenerIniciales(documento.nombre_documento)}
                          </AvatarFallback>
                        </Avatar>
                        <span>{documento.nombre_documento}</span>
                      </div>
                    </TableCell>
                    <TableCell>{""}</TableCell>
                    <TableCell>{""}</TableCell>
                    <TableCell>
                        {""}
                    </TableCell>
                    <TableCell>{""}</TableCell>
                    <TableCell>{""}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Abrir menú</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            <span>Ver</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Pencil className="mr-2 h-4 w-4" />
                            <span>Editar</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem >
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Eliminar</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6">
                    No se encontraron resultados
                  </TableCell>
                </TableRow>
              )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
