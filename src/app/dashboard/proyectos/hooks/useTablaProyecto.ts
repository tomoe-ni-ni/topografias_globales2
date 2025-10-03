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
  const [ordenarPor, setOrdenarPor] = useState<keyof Proyecto | null>(null);
  const [ordenDireccion, setOrdenDireccion] = useState<"asc" | "desc">("asc");

  const [openEliminarDialog, setOpenEliminarDialog] = useState(false);
  const [modalVer, setModalVer] = useState(false);
  const [modalAbiertoEditar, setModalAbiertoEditar] = useState(false);

  const [proyectoSeleccionado, setProyectoSeleccionado] =
    useState<Proyecto | null>(null);

  const elementosPorPagina = 5;

  const formEditar = useForm<editProyectoSchema>({
    resolver: zodResolver(editProyectoSchema),
    defaultValues: {
      nombre: "",
      descripcion: "",
    },
  });

  useEffect(() => {
    if (busqueda.trim() === "") {
      setProyectosFiltrados(Array.isArray(proyectos) ? proyectos : []);
    } else {
      const filtrados = Array.isArray(proyectos)
        ? proyectos.filter(
            (proyecto) =>
              proyecto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
              proyecto.descripcion?.toLowerCase().includes(busqueda.toLowerCase())
          )
        : [];
      setProyectosFiltrados(filtrados);
    }
    setPaginaActual(1);
  }, [busqueda, proyectos]);

  useEffect(() => {
    if (proyectoSeleccionado) {
      formEditar.reset({
        nombre: proyectoSeleccionado.nombre,
        descripcion: proyectoSeleccionado.descripcion,
      });
    }
  }, [proyectoSeleccionado, formEditar]);

  const ordenarProyectos = (campo: keyof Proyecto) => {
    if (ordenarPor === campo) {
      setOrdenDireccion(ordenDireccion === "asc" ? "desc" : "asc");
    } else {
      setOrdenarPor(campo);
      setOrdenDireccion("asc");
    }
  };

  const proyectosOrdenados = [...proyectosFiltrados].sort((a, b) => {
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

  const proyectosPaginados = proyectosOrdenados.slice(
    (paginaActual - 1) * elementosPorPagina,
    paginaActual * elementosPorPagina
  );

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

  return {
    proyectosFiltrados,
    busqueda,
    paginaActual,
    proyectoSeleccionado,
    ordenarPor,
    ordenDireccion,
    elementosPorPagina,
    proyectosPaginados,
    setProyectoSeleccionado,
    setBusqueda,
    setPaginaActual,
    setProyectosFiltrados,
    ordenarProyectos,
    openEliminarDialog,
    setOpenEliminarDialog,
    eliminarProyectoSeleccionado,
    modalVer,
    setModalVer,
    modalAbiertoEditar,
    setModalAbiertoEditar,
    editarProyecto,
    formEditar,
  };
}