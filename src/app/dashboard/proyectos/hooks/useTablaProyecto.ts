import { useState, useEffect } from "react";
import { Proyecto } from "../domain/proyecto.entity";

export function useTableProyecto({
  proyectos,
  setProyectos,
}: {
  proyectos: Proyecto[];
  setProyectos: React.Dispatch<React.SetStateAction<Proyecto[]>>;
}) {
  const [proyectosFiltrados, setProyectosFiltrados] = useState<Proyecto[]>(proyectos);
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);

  const [proyectoSeleccionado, setProyectoSeleccionado] = useState<Proyecto | null>(null);

  const [openEliminarDialog, setOpenEliminarDialog] = useState(false);
  const [modalVer, setModalVer] = useState(false);
  const [modalAbiertoEditar, setModalAbiertoEditar] = useState(false);

  // Simulación de formulario (puedes conectar con react-hook-form)
  const formEditar = {};

  useEffect(() => {
    setProyectosFiltrados(
      proyectos.filter((p) =>
        p.nombre.toLowerCase().includes(busqueda.toLowerCase())
      )
    );
  }, [busqueda, proyectos]);

  const eliminarProyecto = () => {
    if (proyectoSeleccionado) {
      setProyectos((prev) =>
        prev.filter((p) => p.ID_proyecto !== proyectoSeleccionado.ID_proyecto)
      );
      setOpenEliminarDialog(false);
    }
  };

  const editarProyecto = async () => {
    // Lógica de edición (API o setProyectos)
    setModalAbiertoEditar(false);
  };

  return {
    proyectosFiltrados,
    busqueda,
    paginaActual,
    proyectoSeleccionado,
    setProyectoSeleccionado,
    setBusqueda,
    setPaginaActual,
    setProyectosFiltrados,
    eliminarProyecto,
    openEliminarDialog,
    setOpenEliminarDialog,
    modalVer,
    setModalVer,
    modalAbiertoEditar,
    setModalAbiertoEditar,
    formEditar,
    editarProyecto,
  };
}
