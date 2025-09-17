export type Profesor = {
  id: number;
  nombre: string;
  codigo_usuario: string;
};

export type BloqueHorario = {
  id: number;
  dia: string;
  hora: string;
  titulo: string;
  descripcion?: string;
  color: string;
};
