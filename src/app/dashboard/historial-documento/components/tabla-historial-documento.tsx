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
  Eye,
  MoreVertical,
  Search,
  Trash2,
  FileText,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Paginacion } from "@/components/paginacion";
import { HistorialDocumento } from "../domain/historialDocumento.entity";
import { useTableHistorialDocumento } from "../hooks/useTableHistorialDocumento";
import DetallesHistorial from "../components/detalles-historial";
import { Badge } from "@/components/ui/badge";
import { DialogConfirmacion } from "@/components/dialogs/eliminarRow";
import { Dispatch, SetStateAction } from "react";

export function TablaHistorialDocumento({
  historiales,
  setHistoriales,
}: {
  historiales: HistorialDocumento[];
  setHistoriales: Dispatch<SetStateAction<HistorialDocumento[]>>;
}) {
  const {
    historialesFiltradosYOrdenados,
    historialesPaginados,
    busqueda,
    paginaActual,
    elementosPorPagina,
    ordenColumna,
    direccionOrden,
    historialSeleccionado,
    setHistorialSeleccionado,
    setBusqueda,
    setPaginaActual,
    handleOrdenar,
    modalVer,
    setModalVer,
    openEliminarDialog,
    setOpenEliminarDialog,
    eliminarHistorial,
    verDocumento,
    cargandoUrl,
  } = useTableHistorialDocumento({ historiales, setHistoriales });

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar en el historial..."
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
                onClick={() => handleOrdenar("ID_historial")}
              >
                <div className="flex items-center">
                  ID
                  {ordenColumna === "ID_historial" &&
                    (direccionOrden === "asc" ? (
                      <ArrowUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ArrowDown className="ml-1 h-4 w-4" />
                    ))}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => handleOrdenar("documento_historial")}
              >
                <div className="flex items-center">
                  Documento
                  {ordenColumna === "documento_historial" &&
                    (direccionOrden === "asc" ? (
                      <ArrowUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ArrowDown className="ml-1 h-4 w-4" />
                    ))}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => handleOrdenar("created_at")}
              >
                <div className="flex items-center">
                  Fecha de cambio
                  {ordenColumna === "created_at" &&
                    (direccionOrden === "asc" ? (
                      <ArrowUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ArrowDown className="ml-1 h-4 w-4" />
                    ))}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => handleOrdenar("usuario")}
              >
                <div className="flex items-center">
                  Usuario
                  {ordenColumna === "usuario" &&
                    (direccionOrden === "asc" ? (
                      <ArrowUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ArrowDown className="ml-1 h-4 w-4" />
                    ))}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => handleOrdenar("estado")}
              >
                <div className="flex items-center">
                  Estado
                  {ordenColumna === "estado" &&
                    (direccionOrden === "asc" ? (
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
            {historialesPaginados.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-4">
                  No se encontraron resultados
                </TableCell>
              </TableRow>
            ) : (
              historialesPaginados.map((historial) => {
                let colorEstado = "";
                if (historial?.estado?.estado === "Iniciado") {
                  colorEstado = "bg-green-500";
                } else if (historial?.estado?.estado === "En proceso") {
                  colorEstado = "bg-yellow-500";
                } else if (historial?.estado?.estado === "Rechazado") {
                  colorEstado = "bg-red-500";
                }

                return (
                  <TableRow key={historial.ID_historial}>
                    <TableCell>{historial.ID_historial}</TableCell>
                    <TableCell>{historial.documento_historial}</TableCell>
                    <TableCell>
                      {historial.created_at ? new Date(historial.created_at).toLocaleDateString() : ""}
                    </TableCell>
                    <TableCell>
                      {historial.usuario?.nombre} {historial.usuario?.apellido}
                    </TableCell>
                    <TableCell>
                      <Badge variant="default" className={`text-sm ${colorEstado}`}>
                        {historial.estado?.estado || ""}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setHistorialSeleccionado(historial)}
                          >
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Abrir menú</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem 
                            onClick={() => verDocumento(historial.documento_historial)}
                            disabled={cargandoUrl}
                          >
                            <FileText className="mr-2 h-4 w-4" />
                            <span>{cargandoUrl ? "Abriendo..." : "Ver documento"}</span>
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
                );
              })
            )}
          </TableBody>
        </Table>
      </div>

      <Paginacion
        paginaActual={paginaActual}
        totalElementos={historialesFiltradosYOrdenados.length}
        elementosPorPagina={elementosPorPagina}
        onCambioPagina={setPaginaActual}
      />

      <DialogConfirmacion
        open={openEliminarDialog}
        onOpenChange={setOpenEliminarDialog}
        title="¿Estás seguro?"
        description="Esta acción no se puede deshacer."
        onConfirm={eliminarHistorial}
        confirmText="Sí, eliminar"
        cancelText="Cancelar"
        confirmVariant="destructive"
      />

      <DetallesHistorial
        historialSeleccionado={historialSeleccionado}
        setModalVer={setModalVer}
        modalVer={modalVer}
      />
    </div>
  );
}