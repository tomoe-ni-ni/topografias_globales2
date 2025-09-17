import { BloqueHorario, Profesor } from "../domain/profesor.entity";

export const ProfesorService = {
  async getProfesores(): Promise<Profesor[]> {
    const res = await fetch("/api/users?rol=admin");
    if (!res.ok) throw new Error("Error al obtener profesores");
    return res.json();
  },
};

export const HorarioService = {
  async getHorarioPorProfesor(user_id: number): Promise<BloqueHorario[]> {
    const res = await fetch(`/api/horarios?user_id=${user_id}`);
    if (!res.ok) throw new Error("Error al obtener horario");
    return res.json();
  },
};
