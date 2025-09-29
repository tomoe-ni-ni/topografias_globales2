import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction, useState } from "react";
import ubigeo from "@/ubigeo.json";

import {
  editClienteSchema,
  EditClienteSchema,
} from "@/zod/schemas/clientes/clientesEditar.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Cliente, ClienteForm } from "../domain/cliente.entity";
import { actualizarCliente, eliminaCliente } from "../domain/cliente.usecase";

export function useTableCliente({
  clientes,
  setClientes,
}: {
  clientes: Cliente[];
  setClientes: Dispatch<SetStateAction<Cliente[]>>;
}) {
  const { data: session } = useSession();
  const [clientesFiltrados, setClientesFiltrados] = useState<Cliente[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const [openEliminarDialog, setOpenEliminarDialog] = useState(false);
  const [modalVer, setModalVer] = useState(false);
  const [modalAbiertoEditar, setModalAbiertoEditar] = useState(false);

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

  //   useEffect(() => {
  //     if (session?.user.ID_usuario) {
  //       obtenerClientes();
  //     }
  //   }, [session?.user.ID_usuario]);

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

    console.log(cliente);

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

  return {
    clientesFiltrados,
    busqueda,
    paginaActual,
    clienteSeleccionado,
    setClienteSeleccionado,
    setBusqueda,
    setPaginaActual,
    setClientesFiltrados,
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
