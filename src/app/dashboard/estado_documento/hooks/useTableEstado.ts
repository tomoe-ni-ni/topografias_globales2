import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { EstadoDocumento } from "../domain/estado.entity";
import { actualizarEstado, eliminarEstado } from "../domain/estado.usecase";
import {
  editEstadoDocumentoSchema,
  EditEstadoDocumentoSchema,
} from "@/zod/schemas/estado_documento/estadoDocumentoEditar.schema";

export function useTableEstadoDocumento({
  estados,
  setEstados,
}: {
  estados: EstadoDocumento[];
  setEstados: Dispatch<SetStateAction<EstadoDocumento[]>>;
}) {
  const [estadosFiltrados, setEstadosFiltrados] = useState<EstadoDocumento[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);

  const [openEliminarDialog, setOpenEliminarDialog] = useState(false);
  const [modalVer, setModalVer] = useState(false);
  const [modalAbiertoEditar, setModalAbiertoEditar] = useState(false);

  const [estadoSeleccionado, setEstadoSeleccionado] =
    useState<EstadoDocumento | null>(null);

  // Formulario de edición
  const formEditar = useForm<EditEstadoDocumentoSchema>({
    resolver: zodResolver(editEstadoDocumentoSchema),
    defaultValues: {
      estado: estadoSeleccionado?.estado || "",
    },
  });

  // Eliminar estado
  const eliminarEstadoDocumento = async () => {
    if (!estadoSeleccionado?.ID_estado) return;

    try {
      await eliminarEstado(estadoSeleccionado.ID_estado);
      setEstados(
        estados.filter((est) => est.ID_estado !== estadoSeleccionado.ID_estado)
      );
      setOpenEliminarDialog(false);
    } catch (error) {
      console.error("Error al eliminar el estado:", error);
    }
  };

  // Editar estado
  const editarEstadoDocumento = async () => {
    if (!estadoSeleccionado?.ID_estado) return;

    const estadoData: EstadoDocumento = {
      ID_estado: estadoSeleccionado.ID_estado,
      ...formEditar.getValues(),
    };

    try {
      const estadoActualizado = await actualizarEstado(estadoData);
      setEstados((prev) =>
        prev.map((est) =>
          est.ID_estado === estadoSeleccionado.ID_estado
            ? { ...est, ...estadoActualizado }
            : est
        )
      );
      formEditar.reset();
      setModalAbiertoEditar(false);
    } catch (error) {
      console.error("Error al editar el estado:", error);
    }
  };

  return {
    estadosFiltrados,
    busqueda,
    paginaActual,
    estadoSeleccionado,
    setEstadoSeleccionado,
    setBusqueda,
    setPaginaActual,
    setEstadosFiltrados,
    openEliminarDialog,
    setOpenEliminarDialog,
    eliminarEstadoDocumento,
    modalVer,
    setModalVer,
    modalAbiertoEditar,
    setModalAbiertoEditar,
    editarEstadoDocumento,
    formEditar,
  };
}
