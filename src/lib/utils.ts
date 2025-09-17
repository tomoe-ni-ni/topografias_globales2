import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fechaLocal(
  fecha: string | Date | null,
  opciones?: Intl.DateTimeFormatOptions
): string {
    if (!fecha) return "";

  const date = typeof fecha === "string" ? new Date(fecha) : fecha;
  return date.toLocaleString(undefined, opciones);
}

export function obtenerIniciales(nombre: string | null): string {
  if (!nombre) return "";
  return nombre
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);
}


export const coloresEstado: Record<string, string> = {
  activo: "bg-green-100 text-green-800 hover:bg-green-200",
  inactivo: "bg-red-100 text-red-800 hover:bg-red-200",
};
