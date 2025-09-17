import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Zona } from "../domain/zona.entity";
import { crearZona, obtenerZonas } from "../domain/zona.usecase";
import ubigeo from "@/ubigeo.json"

export function useZona() {
  const { data: session } = useSession();
  const [zonas, setZonas] = useState<Zona[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [nombreDepartamento, setNombreDepartamento] = useState("");
  const [nombreDistrito, setNombreDistrito] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [provincia, setProvincia] = useState("");
  const departamentos = Object.keys(ubigeo);
  const provincias: string[] = departamento
    ? (ubigeo as Record<string, string[]>)[departamento] || []
    : [];

  useEffect(() => {
    if (session?.user.ID_usuario) {
      setLoading(true);
      obtenerZonas()
        .then(setZonas)
        .finally(() => setLoading(false));
    }
  }, [session?.user.ID_usuario]);

  const agregarZona = async () => {
    if (session?.user.ID_usuario) return;
    const zona: Zona = {
      nombre_departamento: nombreDepartamento,
      nombre_distrito: nombreDistrito,
    };

    try {
      const nueva = await crearZona(zona);
      setZonas((prev) => [...prev, nueva]);
      setNombreDepartamento("");
      setNombreDistrito("");
      setModalAbierto(false);
    } catch (error) {
      console.error("Error al crear la zona:", error);
    }
  };

  return {
    zonas,
    loading,
    modalAbierto,
    setModalAbierto,
    agregarZona,
    nombreDepartamento,
    setNombreDepartamento,
    nombreDistrito,
    setNombreDistrito,
    setDepartamento,
    setProvincia,
    departamento,
    provincia,
    departamentos,
    provincias,
  };
}
