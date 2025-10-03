import ubigeo from "@/ubigeo.json";
import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";

import {
  editClienteSchema,
  EditClienteSchema,
} from "@/zod/schemas/clientes/clientesEditar.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Cliente, ClienteForm } from "../domain/cliente.entity";
import { actualizarCliente, eliminaCliente } from "../domain/cliente.usecase";

type OrdenColumna = "ID_cliente" | "nombre" | "apellido" | "nombre_departamento" | "nombre_provincia";
type DireccionOrden = "asc" | "desc";

export function useTableCliente({
  clientes,
  setClientes,
}: {
  clientes: Cliente[];
  setClientes: Dispatch<SetStateAction<Cliente[]>>;
}) {
  const { data: session } = useSession();
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const [openEliminarDialog, setOpenEliminarDialog] = useState(false);
  const [modalVer, setModalVer] = useState(false);
  const [modalAbiertoEditar, setModalAbiertoEditar] = useState(false);
  const [ordenColumna, setOrdenColumna] = useState<OrdenColumna | null>(null);
  const [direccionOrden, setDireccionOrden] = useState<DireccionOrden>("asc");
  const elementosPorPagina = 5;

  const [clienteSeleccionado, setClienteSeleccionado] =
    useState<Cliente | null>(null);

  const formEditar = useForm<EditClienteSchema>({
    resolver: zodResolver(editClienteSchema),
    defaultValues: {
      nombre: clienteSeleccionado?.nombre || "",
      apellido: clienteSeleccionado?.apellido || "",
      nombre_departamento: clienteSeleccionado?.nombre_departamento || "",
      nombre_provincia: clienteSeleccionado?.nombre_provincia || "",
    },
  });

  const departamentos = Object.keys(ubigeo);
  const provincias: string[] = formEditar.getValues("nombre_departamento")
    ? (ubigeo as Record<string, string[]>)[
        formEditar.getValues("nombre_departamento")
      ] || []
    : [];

  // Función para cambiar el ordenamiento
  const handleOrdenar = (columna: OrdenColumna) => {
    if (ordenColumna === columna) {
      setDireccionOrden(direccionOrden === "asc" ? "desc" : "asc");
    } else {
      setOrdenColumna(columna);
      setDireccionOrden("asc");
    }
  };

  // Filtrar y ordenar clientes
  const clientesFiltradosYOrdenados = useMemo(() => {
    let resultado = [...clientes];

    // Filtrar según búsqueda
    if (busqueda.trim()) {
      const busquedaLower = busqueda.toLowerCase();
      resultado = resultado.filter(
        (cliente) =>
          cliente.nombre?.toLowerCase().includes(busquedaLower) ||
          cliente.apellido?.toLowerCase().includes(busquedaLower) ||
          cliente.nombre_departamento?.toLowerCase().includes(busquedaLower) ||
          cliente.nombre_provincia?.toLowerCase().includes(busquedaLower) ||
          cliente.ID_cliente?.toString().includes(busquedaLower)
      );
    }

    // Ordenar
    if (ordenColumna) {
      resultado.sort((a, b) => {
        let valorA: any;
        let valorB: any;

        switch (ordenColumna) {
          case "ID_cliente":
            valorA = a.ID_cliente;
            valorB = b.ID_cliente;
            break;
          case "nombre":
            valorA = a.nombre?.toLowerCase() || "";
            valorB = b.nombre?.toLowerCase() || "";
            break;
          case "apellido":
            valorA = a.apellido?.toLowerCase() || "";
            valorB = b.apellido?.toLowerCase() || "";
            break;
          case "nombre_departamento":
            valorA = a.nombre_departamento?.toLowerCase() || "";
            valorB = b.nombre_departamento?.toLowerCase() || "";
            break;
          case "nombre_provincia":
            valorA = a.nombre_provincia?.toLowerCase() || "";
            valorB = b.nombre_provincia?.toLowerCase() || "";
            break;
          default:
            return 0;
        }

        if (valorA < valorB) return direccionOrden === "asc" ? -1 : 1;
        if (valorA > valorB) return direccionOrden === "asc" ? 1 : -1;
        return 0;
      });
    }

    return resultado;
  }, [clientes, busqueda, ordenColumna, direccionOrden]);

  // Calcular clientes paginados
  const clientesPaginados = useMemo(() => {
    const inicio = (paginaActual - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;
    return clientesFiltradosYOrdenados.slice(inicio, fin);
  }, [clientesFiltradosYOrdenados, paginaActual, elementosPorPagina]);

  // Resetear página cuando cambia la búsqueda u ordenamiento
  useEffect(() => {
    setPaginaActual(1);
  }, [busqueda, ordenColumna, direccionOrden]);

  const eliminarCliente = async () => {
    if (!clienteSeleccionado?.ID_cliente) return;

    try {
      await eliminaCliente(clienteSeleccionado.ID_cliente);
      setClientes(
        clientes.filter(
          (cli) => cli.ID_cliente !== clienteSeleccionado.ID_cliente
        )
      );
      setOpenEliminarDialog(false);
    } catch (error) {
      console.error("Error al eliminar el cliente:", error);
    }

    return () => {};
  };

  const editarCliente = async () => {
    if (!clienteSeleccionado?.ID_cliente) return;

    const cliente: ClienteForm = {
      ID_cliente: clienteSeleccionado.ID_cliente,
      ...formEditar.getValues(),
    };

    try {
      const clienteActualizado = await actualizarCliente(cliente);
      setClientes((prev) =>
        prev.map((cli) =>
          cli.ID_cliente === clienteSeleccionado?.ID_cliente
            ? { ...cli, ...clienteActualizado }
            : cli
        )
      );
      formEditar.reset();
      setModalAbiertoEditar(false);
    } catch (error) {
      console.error("Error al editar el cliente:", error);
    }
  };

  useEffect(() => {
    if (clienteSeleccionado) {
      formEditar.reset({
        nombre: clienteSeleccionado?.nombre || "",
        apellido: clienteSeleccionado?.apellido || "",
        nombre_departamento: clienteSeleccionado?.nombre_departamento || "",
        nombre_provincia: clienteSeleccionado?.nombre_provincia || "",
      });
    }
  }, [clienteSeleccionado, formEditar]);

  return {
    clientesFiltradosYOrdenados,
    clientesPaginados,
    busqueda,
    paginaActual,
    elementosPorPagina,
    ordenColumna,
    direccionOrden,
    clienteSeleccionado,
    setClienteSeleccionado,
    setBusqueda,
    setPaginaActual,
    handleOrdenar,
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
  };
}