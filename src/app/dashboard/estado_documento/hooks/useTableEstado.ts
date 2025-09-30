import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  editEstadoDocumentoSchema,
  EditEstadoDocumentoSchema,
} from "@/zod/schemas/estado_documento/estadoDocumentoEditar.schema";
import { EstadoDocumento } from "../domain/estado.entity";
import { actualizarEstado, eliminarEstado } from "../domain/estado.usecase";

export function useTableEstadoDocumento({
  estados,
  setEstados,
}: {
  estados: EstadoDocumento[];
  setEstados: Dispatch<SetStateAction<EstadoDocumento[]>>;
}) {
  const [estadosFiltrados, setEstadosFiltrados] = useState<EstadoDocumento[]>(
    []
  );
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);

  const [openEliminarDialog, setOpenEliminarDialog] = useState(false);
  const [modalVer, setModalVer] = useState(false);
  const [modalAbiertoEditar, setModalAbiertoEditar] = useState(false);

  const [estadoSeleccionado, setEstadoSeleccionado] =
    useState<EstadoDocumento | null>(null);

  const formEditar = useForm<EditEstadoDocumentoSchema>({
    resolver: zodResolver(editEstadoDocumentoSchema),
    defaultValues: {
      estado: "",
    },
  });

  useEffect(() => {
    if (estadoSeleccionado) {
      formEditar.reset({
        estado: estadoSeleccionado.estado || "",
      });
    }
  }, [estadoSeleccionado, formEditar]);

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

  const editarEstadoDocumento = async () => {
    if (!estadoSeleccionado?.ID_estado) return;

    const estado: EstadoDocumento = {
      ID_estado: estadoSeleccionado.ID_estado,
      ...formEditar.getValues(),
    };

    try {
      const estadoActualizado = await actualizarEstado(estado);
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

  const dataToRender =
    busqueda.trim().length > 0
      ? estados.filter((est) =>
          est.estado.toLowerCase().includes(busqueda.toLowerCase())
        )
      : estados;

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
    dataToRender,
  };
}
