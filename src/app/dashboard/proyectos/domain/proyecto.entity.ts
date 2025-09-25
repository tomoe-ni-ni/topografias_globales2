export type Proyecto = {
  ID_proyecto?: number;
  nombre: string;
  descripcion: string;
};

export type ProyectoFormEdit = {
  nombre: string;
  descripcion: string;
  ID_proyecto: number;
};