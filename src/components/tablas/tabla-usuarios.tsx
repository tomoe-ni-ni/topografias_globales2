"use client";

import EditUserForm from "@/app/dashboard/usuarios/components/EditUserForm";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Usuarios } from "@/types/usuarios";
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
import { useEffect, useState } from "react";
import { toast } from "sonner";

const obtenerIniciales = (nombre: string) => {
  return nombre
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);
};

const coloresEstado: Record<string, string> = {
  activo: "bg-green-100 text-green-800 hover:bg-green-200",
  inactivo: "bg-red-100 text-red-800 hover:bg-red-200",
};

export function TablaUsuarios({
  usuariosData,
  onUsuarioEditado,
  onUsuarioEliminado,
}: {
  usuariosData: Usuarios[];
  onUsuarioEditado: (usuario: Usuarios) => void;
  onUsuarioEliminado: (id: number) => void;
}) {
  const [usuarios, setUsuarios] = useState<Usuarios[]>(usuariosData);
  const [usuariosFiltrados, setUsuariosFiltrados] = useState<Usuarios[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const [modalEstado, setModalEstado] = useState(false);
  const [modalVer, setModalVer] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] =
    useState<Usuarios | null>(null);
  const [nuevoEstado, setNuevoEstado] = useState<"activo" | "inactivo" | null>(
    null
  );
  const [ordenarPor, setOrdenarPor] = useState<keyof Usuarios | null>(null);
  const [ordenDireccion, setOrdenDireccion] = useState<"asc" | "desc">("asc");
  const [usuarioEdit, setUsuarioEdit] = useState<Usuarios | null>(null);

  const elementosPorPagina = 5;
  const totalPaginas = Math.ceil(usuariosFiltrados.length / elementosPorPagina);

  useEffect(() => {
    setUsuarios(usuariosData);
    setUsuariosFiltrados(Array.isArray(usuariosData) ? usuariosData : []);
  }, [usuariosData]);

  useEffect(() => {
    if (busqueda.trim() === "") {
      setUsuariosFiltrados(Array.isArray(usuarios) ? usuarios : []);
    } else {
      const filtrados = Array.isArray(usuarios)
        ? usuarios.filter((usuario) =>
            usuario.nombre.toLowerCase().includes(busqueda.toLowerCase())
          )
        : [];
      setUsuariosFiltrados(filtrados);
    }
    setPaginaActual(1);
  }, [busqueda, usuarios]);

  const ordenarUsuarios = (campo: keyof Usuarios) => {
    if (ordenarPor === campo) {
      setOrdenDireccion(ordenDireccion === "asc" ? "desc" : "asc");
    } else {
      setOrdenarPor(campo);
      setOrdenDireccion("asc");
    }
  };
  const confirmarEliminar = async (id: number | null) => {
    if (!id) return;
    const res = await fetch(`/api/users/${id}`, { method: "DELETE" });
    if (res.ok) {
      onUsuarioEliminado(id);
      toast.success("Usuario eliminado correctamente");
      setModalEliminar(false);
    } else {
      toast.error("Error al eliminar usuario");
    }
  };

  const usuariosOrdenados = [...(usuariosFiltrados ?? [])].sort((a, b) => {
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

  const usuariosPaginados = usuariosOrdenados.slice(
    (paginaActual - 1) * elementosPorPagina,
    paginaActual * elementosPorPagina
  );

  const cambiarPagina = (pagina: number) => {
    setPaginaActual(pagina);
  };

  const abrirModalEstado = (
    usuario: Usuarios,
    estado: "activo" | "inactivo"
  ) => {
    setUsuarioSeleccionado(usuario);
    setNuevoEstado(estado);
    setModalEstado(true);
  };

  const confirmarCambioEstado = () => {
    if (usuarioSeleccionado && nuevoEstado) {
      const nuevosUsuarios = usuarios.map((u) =>
        u.ID_usuario === usuarioSeleccionado.ID_usuario
          ? { ...u, estado: nuevoEstado }
          : u
      );
      setUsuarios(nuevosUsuarios);
      setModalEstado(false);
    }
  };

  const abrirModalVer = (usuario: Usuarios) => {
    setUsuarioSeleccionado(usuario);
    setModalVer(true);
  };

  const abrirModalEliminar = (usuario: Usuarios) => {
    setUsuarioSeleccionado(usuario);
    setModalEliminar(true);
  };

  const abrirModalEditar = (usuario: Usuarios) => {
    setUsuarioSeleccionado(usuario);
    setUsuarioEdit(usuario);
    setModalEditar(true);
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar por nombre o código de usuario..."
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
                onClick={() => ordenarUsuarios("nombre")}
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
              <TableHead
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => ordenarUsuarios("apellido")}
              >
                <div className="flex items-center">
                  Apellido
                  {ordenarPor === "apellido" &&
                    (ordenDireccion === "asc" ? (
                      <ArrowUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ArrowDown className="ml-1 h-4 w-4" />
                    ))}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => ordenarUsuarios("correo")}
              >
                <div className="flex items-center">
                  Correo
                  {ordenarPor === "correo" &&
                    (ordenDireccion === "asc" ? (
                      <ArrowUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ArrowDown className="ml-1 h-4 w-4" />
                    ))}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => ordenarUsuarios("estado")}
              >
                <div className="flex items-center">
                  Estado
                  {ordenarPor === "estado" &&
                    (ordenDireccion === "asc" ? (
                      <ArrowUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ArrowDown className="ml-1 h-4 w-4" />
                    ))}
                </div>
              </TableHead>
              <TableHead className="cursor-pointer hover:bg-muted/50">
                Área
              </TableHead>
              <TableHead
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => ordenarUsuarios("fecha_ingreso")}
              >
                <div className="flex items-center">
                  Fecha de ingreso
                  {ordenarPor === "fecha_ingreso" &&
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
            {usuariosPaginados.length > 0 ? (
              usuariosPaginados.map((usuario) => (
                <TableRow key={usuario.ID_usuario}>
                  <TableCell className="font-medium">
                    <div className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarFallback>
                          {obtenerIniciales(usuario.nombre)}
                        </AvatarFallback>
                      </Avatar>
                      <span>{usuario.nombre}</span>
                    </div>
                  </TableCell>
                  <TableCell>{usuario.apellido || ""}</TableCell>
                  <TableCell>{usuario.correo}</TableCell>
                  <TableCell>
                    <Badge
                      className={coloresEstado[usuario.estado ?? ""] || ""}
                    >
                      {usuario.estado
                        ? usuario.estado.charAt(0).toUpperCase() +
                          usuario.estado.slice(1)
                        : ""}
                    </Badge>
                  </TableCell>
                  <TableCell>{usuario.area?.nombre || "Sin área"}</TableCell>
                  <TableCell>
                    {usuario.fecha_ingreso
                      ? usuario.fecha_ingreso.split("T")[0]
                      : ""}
                  </TableCell>
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
                          onClick={() => abrirModalVer(usuario)}
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          <span>Ver</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => abrirModalEditar(usuario)}
                        >
                          <Pencil className="mr-2 h-4 w-4" />
                          <span>Editar</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => abrirModalEliminar(usuario)}
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

      {usuariosFiltrados.length > 0 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Mostrando {(paginaActual - 1) * elementosPorPagina + 1} a{" "}
            {Math.min(
              paginaActual * elementosPorPagina,
              usuariosFiltrados.length
            )}{" "}
            de {usuariosFiltrados.length} registros
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

      <Dialog open={modalEstado} onOpenChange={setModalEstado}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cambiar estado</DialogTitle>
            <DialogDescription>
              ¿Estás seguro de que deseas cambiar el estado de{" "}
              {usuarioSeleccionado?.nombre} a {nuevoEstado}?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setModalEstado(false)}>
              Cancelar
            </Button>
            <Button onClick={confirmarCambioEstado}>Confirmar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={modalVer} onOpenChange={setModalVer}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Detalles del usuario</DialogTitle>
          </DialogHeader>
          {usuarioSeleccionado && (
            <div className="space-y-4">
              <div className="flex justify-center">
                <Avatar className="h-24 w-24">
                  <AvatarFallback className="text-2xl">
                    {obtenerIniciales(usuarioSeleccionado.nombre)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Nombre
                  </p>
                  <p>{usuarioSeleccionado.nombre}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Rol
                  </p>
                  <p>{usuarioSeleccionado.rol}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Estado
                  </p>
                  <Badge
                    className={
                      coloresEstado[usuarioSeleccionado.estado ?? ""] || ""
                    }
                  >
                    {(usuarioSeleccionado.estado?.charAt(0).toUpperCase() ??
                      "") + (usuarioSeleccionado.estado?.slice(1) ?? "")}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Fecha de registro
                  </p>
                  <p>
                    {usuarioSeleccionado.fecha_ingreso
                      ? usuarioSeleccionado.fecha_ingreso.split("T")[0]
                      : ""}
                  </p>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setModalVer(false)}>Cerrar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={modalEliminar} onOpenChange={setModalEliminar}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Eliminar a {usuarioSeleccionado?.nombre}</DialogTitle>
            <DialogDescription>
              ¿Estás seguro de que deseas eliminar a{" "}
              {usuarioSeleccionado?.nombre}? Esta acción no se puede deshacer.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setModalEliminar(false)}>
              Cancelar
            </Button>
            <Button
              variant="destructive"
              onClick={() =>
                confirmarEliminar(usuarioSeleccionado?.ID_usuario ?? null)
              }
            >
              Eliminar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={modalEditar} onOpenChange={setModalEditar}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar usuario</DialogTitle>
            <DialogDescription>
              Aquí puedes editar los detalles del usuario.
            </DialogDescription>
          </DialogHeader>
          <EditUserForm
            usuario={usuarioEdit}
            onClose={() => setModalEditar(false)}
            onUsuarioEditado={(usuarioActualizado) => {
              onUsuarioEditado(usuarioActualizado);
              setUsuarioEdit(null);
              setModalEditar(false);
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
