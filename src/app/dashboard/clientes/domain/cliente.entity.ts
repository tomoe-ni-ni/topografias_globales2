export type Cliente = {
  ID_cliente?: number;
  nombre: string;
  apellido: string;
  nombre_departamento: string;
  nombre_provincia: string;
};

export type ClienteForm = {
  ID_cliente?: number;
  nombre: string;
  apellido?: string;
  nombre_departamento: string;
  nombre_provincia: string;
};
