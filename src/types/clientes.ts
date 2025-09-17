export interface Cliente {
  id: number;
  user_id: number;
  nombre: string | null;
  apellidos: string | null;
  email: string | null;
  telefono: string | null;
  direccion: string | null;
  created_at: string | null;
  updated_at: string | null;
  deleted_at: string | null;
  usuario?: {
    id: number;
    codigo_usuario: string;
    nombre: string;
    rol: string;
    estado: string;
  };
}

export type ClienteForm = {
  id?: number;
  user_id?: number;
  nombre?: string;
  apellidos?: string;
  email?: string;
  telefono?: string;
  direccion?: string;
  password?: string;
  rol?: string;
  estado?: string;
};
