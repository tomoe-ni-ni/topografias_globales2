export type Usuarios = {
  ID_usuario: number;
  nombre: string;
  apellido?: string;
  correo: string;
  contrasena?: string;
  rol: string;
  estado?: string;
  ID_area?: number | null;
  area?: { nombre: string } | null;
  fecha_ingreso?: string; // si tu backend la retorna
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
