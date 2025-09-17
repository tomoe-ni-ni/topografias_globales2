import { useEffect, useState } from "react";
import { BloqueHorario, Profesor } from "../domain/profesor.entity";
import { HorarioService, ProfesorService } from "../infra/profesor.service";

export function useHorarioProfesores() {
  const [profesores, setProfesores] = useState<Profesor[]>([]);
  const [profesorSeleccionado, setProfesorSeleccionado] = useState<number | null>(null);
  const [bloques, setBloques] = useState<BloqueHorario[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    ProfesorService.getProfesores().then(setProfesores);
  }, []);

  useEffect(() => {
    if (profesorSeleccionado) {
      setLoading(true);
      HorarioService.getHorarioPorProfesor(profesorSeleccionado)
        .then(setBloques)
        .finally(() => setLoading(false));
    } else {
      setBloques([]);
    }
  }, [profesorSeleccionado]);

  return {
    profesores,
    profesorSeleccionado,
    setProfesorSeleccionado,
    bloques,
    loading,
  };
}
