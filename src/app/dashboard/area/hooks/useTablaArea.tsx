import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Area } from "../domain/area.entity";
import { actualizarArea, eliminaArea } from "../domain/area.usecase";
import { editAreaSchema } from "@/zod/schemas/area/areaEditar.schema";

export function useTableArea({
  areas,
  setAreas,
}: {
  areas: Area[];
  setAreas: Dispatch<SetStateAction<Area[]>>;
}) {
  const [areasFiltradas, setAreasFiltradas] = useState<Area[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);

  const [openEliminarDialog, setOpenEliminarDialog] = useState(false);
  const [modalVer, setModalVer] = useState(false);
  const [modalAbiertoEditar, setModalAbiertoEditar] = useState(false);

  const [areaSeleccionada, setAreaSeleccionada] = useState<Area | null>(null);

  // Formulario de edición
  const formEditar = useForm<editAreaSchema>({
    resolver: zodResolver(editAreaSchema),
    defaultValues: {
      nombre: "",
    },
  });

  // Resetear el form cada vez que cambie el área seleccionada
  useEffect(() => {
    if (areaSeleccionada) {
      formEditar.reset({
        nombre: areaSeleccionada.nombre,
      });
    }
  }, [areaSeleccionada, formEditar]);

  // Eliminar área
  const eliminarAreaSeleccionada = async () => {
    if (!areaSeleccionada?.ID_area) return;

    try {
      await eliminaArea(areaSeleccionada.ID_area);
      setAreas((prev) =>
        prev.filter((a) => a.ID_area !== areaSeleccionada.ID_area)
      );
      setOpenEliminarDialog(false);
    } catch (error) {
      console.error("Error al eliminar el área:", error);
    }
  };

  // Editar área
  const editarArea = async () => {
    if (!areaSeleccionada?.ID_area) return;

    const areaData: Area = {
      ID_area: areaSeleccionada.ID_area,
      ...formEditar.getValues(),
    };

    try {
      const areaActualizada = await actualizarArea(areaData);
      setAreas((prev) =>
        prev.map((a) =>
          a.ID_area === areaSeleccionada.ID_area
            ? { ...a, ...areaActualizada }
            : a
        )
      );
      formEditar.reset();
      setModalAbiertoEditar(false);
    } catch (error) {
      console.error("Error al editar el área:", error);
    }
  };

  return {
    areasFiltradas,
    busqueda,
    paginaActual,
    areaSeleccionada,
    setAreaSeleccionada,
    setBusqueda,
    setPaginaActual,
    setAreasFiltradas,
    openEliminarDialog,
    setOpenEliminarDialog,
    eliminarAreaSeleccionada,
    modalVer,
    setModalVer,
    modalAbiertoEditar,
    setModalAbiertoEditar,
    editarArea,
    formEditar,
  };
}
