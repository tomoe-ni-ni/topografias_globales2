import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { editProyectoSchema } from "@/zod/schemas/proyectos/proyectoEditar.schema";
import { Proyecto } from "../domain/proyecto.entity";
import {
  actualizarProyecto,
  eliminarProyecto,
} from "../domain/proyecto.usecase";

export function useTableProyecto({
  proyectos,
  setProyectos,
}: {
  proyectos: Proyecto[];
  setProyectos: Dispatch<SetStateAction<Proyecto[]>>;
}) {
  const [proyectosFiltrados, setProyectosFiltrados] = useState<Proyecto[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);

  const [openEliminarDialog, setOpenEliminarDialog] = useState(false);
  const [modalVer, setModalVer] = useState(false);
  const [modalAbiertoEditar, setModalAbiertoEditar] = useState(false);

  const [proyectoSeleccionado, setProyectoSeleccionado] =
    useState<Proyecto | null>(null);

  const formEditar = useForm<editProyectoSchema>({
    resolver: zodResolver(editProyectoSchema),
    defaultValues: {
      nombre: "",
      descripcion: "",
    },
  });

  useEffect(() => {
    if (proyectoSeleccionado) {
      formEditar.reset({
        nombre: proyectoSeleccionado.nombre,
        descripcion: proyectoSeleccionado.descripcion,
      });
    }
  }, [proyectoSeleccionado, formEditar]);

  const eliminarProyectoSeleccionado = async () => {
    if (!proyectoSeleccionado?.ID_proyecto) return;

    try {
      await eliminarProyecto(proyectoSeleccionado.ID_proyecto);
      setProyectos(
        proyectos.filter(
          (p) => p.ID_proyecto !== proyectoSeleccionado.ID_proyecto
        )
      );
      setOpenEliminarDialog(false);
    } catch (error) {
      console.error("Error al eliminar el proyecto:", error);
    }
  };

  const editarProyecto = async () => {
    if (!proyectoSeleccionado?.ID_proyecto) return;

    const proyectoData: Proyecto = {
      ID_proyecto: proyectoSeleccionado.ID_proyecto,
      ...formEditar.getValues(),
    };

    try {
      const proyectoActualizado = await actualizarProyecto(proyectoData);
      setProyectos((prev) =>
        prev.map((p) =>
          p.ID_proyecto === proyectoSeleccionado.ID_proyecto
            ? { ...p, ...proyectoActualizado }
            : p
        )
      );
      formEditar.reset();
      setModalAbiertoEditar(false);
    } catch (error) {
      console.error("Error al editar el proyecto:", error);
    }
  };

  const dataToRender =
    busqueda.trim().length > 0
      ? proyectos.filter(
          (p) =>
            p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
            p.descripcion.toLowerCase().includes(busqueda.toLowerCase())
        )
      : proyectos;

  return {
    proyectosFiltrados,
    busqueda,
    paginaActual,
    proyectoSeleccionado,
    setProyectoSeleccionado,
    setBusqueda,
    setPaginaActual,
    setProyectosFiltrados,
    openEliminarDialog,
    setOpenEliminarDialog,
    eliminarProyectoSeleccionado,
    modalVer,
    setModalVer,
    modalAbiertoEditar,
    setModalAbiertoEditar,
    editarProyecto,
    formEditar,
    dataToRender,
  };
}
