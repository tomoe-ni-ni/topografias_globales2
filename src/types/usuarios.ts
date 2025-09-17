export type Usuarios = {
  id: number;
  codigo_usuario: string;
  rol: string;
  nombre: string;
  estado: string;
  created_at: string;
  // agrega otros campos si los necesitas
};

export type UsuarioForm = {
  id?: number;
  codigo_usuario: string;
  password_hash: string;
  rol: string;
  nombre?: string;
  estado?: string;
  created_at?: string;
  // agrega otros campos si los necesitas
};
