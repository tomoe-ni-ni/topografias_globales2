import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Cliente } from "@/types/clientes";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { DialogEliminarRow } from "@/components/dialogs/cambioEstado";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { coloresEstado, fechaLocal, obtenerIniciales } from "@/lib/utils";
import {
  ArrowDown,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  Eye,
  MoreVertical,
  Pencil,
  Search,
  Trash2,
} from "lucide-react";
import { DetalleCampo } from "../detalleCampo";

export function TablaClientes({
  clientesData,
  onClienteEditado,
  onClienteEliminado,
}: {
  clientesData: Cliente[];
  onClienteEditado: (cliente: Cliente) => void;
  onClienteEliminado: (id: number) => void;
}) {
  const [clientes, setClientes] = useState<Cliente[]>(clientesData);
  const [clientesFiltrados, setClientesFiltrados] = useState<Cliente[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const [modalEstado, setModalEstado] = useState(false);
  const [modalVer, setModalVer] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [clienteSeleccionado, setClienteSeleccionado] =
    useState<Cliente | null>(null);
  const [nuevoEstado, setNuevoEstado] = useState<"activo" | "inactivo" | null>(
    null
  );
  const [ordenarPor, setOrdenarPor] = useState<keyof Cliente | null>(null);
  const [ordenDireccion, setOrdenDireccion] = useState<"asc" | "desc">("asc");

  const elementosPorPagina = 5;
  const totalPaginas = Math.ceil(clientesFiltrados.length / elementosPorPagina);

  useEffect(() => {
    setClientes(clientesData);
    setClientesFiltrados(Array.isArray(clientesData) ? clientesData : []);
  }, [clientesData]);

  const ordenarClientes = (campo: keyof Cliente) => {
    if (ordenarPor === campo) {
      setOrdenDireccion(ordenDireccion === "asc" ? "desc" : "asc");
    } else {
      setOrdenarPor(campo);
      setOrdenDireccion("asc");
    }
  };
  const confirmarEliminar = async (id: number | null) => {
    if (!id) return;
    const res = await fetch(`/api/clientes/${id}`, { method: "DELETE" });
    if (res.ok) {
      onClienteEliminado(id);
      toast.success("Cliente eliminado correctamente");
      setModalEliminar(false);
    } else {
      toast.error("Error al eliminar cliente");
    }
  };

  const clientesOrdenados = [...(clientesFiltrados ?? [])].sort((a, b) => {
    if (!ordenarPor) return 0;

    const valorA = a[ordenarPor];
    const valorB = b[ordenarPor];

    if (typeof valorA === "string" && typeof valorB === "string") {
      return ordenDireccion === "asc"
        ? valorA.localeCompare(valorB)
        : valorB.localeCompare(valorA);
    }

    if (valorA == null || valorB == null) {
      return valorA == null
        ? ordenDireccion === "asc"
          ? -1
          : 1
        : ordenDireccion === "asc"
        ? 1
        : -1;
    }
    if (valorA < valorB) return ordenDireccion === "asc" ? -1 : 1;
    if (valorA > valorB) return ordenDireccion === "asc" ? 1 : -1;
    return 0;
  });

  const clientesPaginados = clientesOrdenados.slice(
    (paginaActual - 1) * elementosPorPagina,
    paginaActual * elementosPorPagina
  );

  const cambiarPagina = (pagina: number) => {
    setPaginaActual(pagina);
  };

  const abrirModalEstado = (
    cliente: Cliente,
    estado: "activo" | "inactivo"
  ) => {
    setClienteSeleccionado(cliente);
    setNuevoEstado(estado);
    setModalEstado(true);
  };

  const confirmarCambioEstado = () => {
    if (clienteSeleccionado && nuevoEstado) {
      const nuevosClientes = clientes.map((c) =>
        c.id === clienteSeleccionado.id ? { ...c, estado: nuevoEstado } : c
      );
      setClientes(nuevosClientes);
      setModalEstado(false);
    }
  };

  const abrirModalVer = (cliente: Cliente) => {
    setClienteSeleccionado(cliente);
    setModalVer(true);
  };

  const abrirModalEliminar = (cliente: Cliente) => {
    setClienteSeleccionado(cliente);
    setModalEliminar(true);
  };

  const abrirModalEditar = (cliente: Cliente) => {
    setClienteSeleccionado(cliente);
    setModalEditar(true);
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar por nombre de cliente ..."
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
                onClick={() => ordenarClientes("nombre")}
              >
                <div className="flex items-center">
                  Usuario
                  {ordenarPor === "nombre" &&
                    (ordenDireccion === "asc" ? (
                      <ArrowUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ArrowDown className="ml-1 h-4 w-4" />
                    ))}
                </div>
              </TableHead>
              <TableHead className="cursor-pointer hover:bg-muted/50">
                <div className="flex items-center">Código de usuario</div>
              </TableHead>

              <TableHead className="cursor-pointer hover:bg-muted/50">
                <div className="flex items-center">Estado</div>
              </TableHead>
              <TableHead
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => ordenarClientes("telefono")}
              >
                <div className="flex items-center">
                  Teléfono
                  {ordenarPor === "telefono" &&
                    (ordenDireccion === "asc" ? (
                      <ArrowUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ArrowDown className="ml-1 h-4 w-4" />
                    ))}
                </div>
              </TableHead>

              <TableHead
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => ordenarClientes("created_at")}
              >
                <div className="flex items-center">
                  Fecha de registro
                  {ordenarPor === "created_at" &&
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
            {clientesPaginados.length > 0 ? (
              clientesPaginados.map((cliente) => (
                <TableRow key={cliente.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarFallback>
                          {obtenerIniciales(cliente.nombre)}
                        </AvatarFallback>
                      </Avatar>
                      <span>{cliente.nombre}</span>
                      <span>{cliente.apellidos}</span>
                    </div>
                  </TableCell>

                  <TableCell>{cliente.usuario?.codigo_usuario}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className={coloresEstado[cliente?.usuario!.estado]}
                          size="sm"
                        >
                          {cliente?.usuario!.estado.charAt(0).toUpperCase() +
                            cliente?.usuario!.estado.slice(1)}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        <DropdownMenuItem
                          onClick={() => abrirModalEstado(cliente, "activo")}
                          className="text-green-600"
                        >
                          Activo
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => abrirModalEstado(cliente, "inactivo")}
                          className="text-red-600"
                        >
                          Inactivo
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                  <TableCell>{cliente.telefono}</TableCell>
                  <TableCell>{fechaLocal(cliente.created_at!)}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                          <span className="sr-only">Abrir menú</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => abrirModalVer(cliente)}
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          <span>Ver</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => abrirModalEditar(cliente)}
                        >
                          <Pencil className="mr-2 h-4 w-4" />
                          <span>Editar</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => abrirModalEliminar(cliente)}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Eliminar</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-6">
                  No se encontraron resultados
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {clientesFiltrados.length > 0 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Mostrando {(paginaActual - 1) * elementosPorPagina + 1} a{" "}
            {Math.min(
              paginaActual * elementosPorPagina,
              clientesFiltrados.length
            )}{" "}
            de {clientesFiltrados.length} registros
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => cambiarPagina(paginaActual - 1)}
              disabled={paginaActual === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from({ length: totalPaginas }, (_, i) => i + 1).map(
              (pagina) => (
                <Button
                  key={pagina}
                  variant={pagina === paginaActual ? "default" : "outline"}
                  size="icon"
                  onClick={() => cambiarPagina(pagina)}
                >
                  {pagina}
                </Button>
              )
            )}
            <Button
              variant="outline"
              size="icon"
              onClick={() => cambiarPagina(paginaActual + 1)}
              disabled={paginaActual === totalPaginas}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      <DialogEliminarRow
        open={modalEstado}
        onOpenChange={setModalEstado}
        title="Cambiar estado"
        description={
          <>
            ¿Estás seguro de que deseas cambiar el estado de{" "}
            {clienteSeleccionado?.nombre} a {nuevoEstado}?
          </>
        }
        onConfirm={confirmarCambioEstado}
      />
      <DialogEliminarRow
        open={modalEliminar}
        onOpenChange={setModalEliminar}
        title={`Eliminar a ${clienteSeleccionado?.nombre}`}
        description={
          <>
            ¿Estás seguro de que deseas eliminar a {clienteSeleccionado?.nombre}
            ? Esta acción no se puede deshacer.
          </>
        }
        onConfirm={() => confirmarEliminar(clienteSeleccionado?.id ?? null)}
        confirmText="Eliminar"
        cancelText="Cancelar"
      />

      <Dialog open={modalVer} onOpenChange={setModalVer}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Detalles del usuario</DialogTitle>
          </DialogHeader>
          {clienteSeleccionado && (
            <div className="space-y-4">
              <div className="flex justify-center">
                <Avatar className="h-24 w-24">
                  <AvatarFallback className="text-2xl">
                    {obtenerIniciales(clienteSeleccionado.nombre)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <DetalleCampo label="Nombre" className="">
                  {clienteSeleccionado.nombre} {clienteSeleccionado.apellidos}
                </DetalleCampo>

                <DetalleCampo label="Codigo de usuario" className="">
                  {clienteSeleccionado.usuario?.codigo_usuario}
                </DetalleCampo>
                <div>
                  <Typography className="text-sm font-medium text-muted-foreground">
                    Estado
                  </Typography>
                  {(() => {
                    const estado =
                      clienteSeleccionado.usuario?.estado ?? "activo";
                    const claseEstado = coloresEstado[estado];
                    return (
                      <Button
                        variant="outline"
                        className={claseEstado}
                        size="sm"
                      >
                        {estado.charAt(0).toUpperCase() + estado.slice(1)}
                      </Button>
                    );
                  })()}
                </div>
                <DetalleCampo label="Fecha de registro" className="">
                  {fechaLocal(clienteSeleccionado.created_at)}
                </DetalleCampo>

                <DetalleCampo label="Teléfono" className="">
                  {clienteSeleccionado.telefono}
                </DetalleCampo>
                <DetalleCampo label="Correo" className="">
                  {clienteSeleccionado.email}
                </DetalleCampo>
                <DetalleCampo label="Dirección" className="col-span-2">
                  {clienteSeleccionado.direccion}
                </DetalleCampo>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setModalVer(false)}>Cerrar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={modalEditar} onOpenChange={setModalEditar}>
        <DialogContent className=" md:max-w-2xl  xl:max-w-4xl">
          <DialogHeader>
            <DialogTitle>Editar cliente</DialogTitle>
            <DialogDescription>
              Aquí puedes editar los detalles del cliente.
            </DialogDescription>
          </DialogHeader>
          {/* <EditClientForm
            cliente={clienteSeleccionado}
            onClose={() => setModalEditar(false)}
            onClienteEditado={onClienteEditado}
          /> */}
        </DialogContent>
      </Dialog>
    </div>
  );
}
