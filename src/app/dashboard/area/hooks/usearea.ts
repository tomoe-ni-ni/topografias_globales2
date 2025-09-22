import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Area } from "../domain/area.entity";
import { crearArea, obtenerAreas } from "../domain/area.usecaso";


export function useArea() {
    const { data: session, status } = useSession();
    const [areas, setAreas] = useState<Area[]>([]);
    const [loading, setLoading] = useState(false);
    const [modalAbierto, setModalAbierto] = useState(false);
    const [nombre, setNombre] = useState("");

    useEffect(() => {
        if (session?.user.ID_usuario) {
            setLoading(true);
            obtenerAreas()
                .then(setAreas)
                .finally(() => setLoading(false));
        }
    }, [session?.user.ID_usuario]);

    const agregarArea = async () => {
        if (!session?.user.ID_usuario) return;
        const area: Area = {
            nombre: nombre,
        };
        try {
            const nueva = await crearArea(area);
            setAreas((prev) => [...prev, nueva]);
            setNombre("");
            setModalAbierto(false);
        } catch (error) {
            console.error("Error al crear la tarea:", error);
        }
    };

    return {
        areas,
        loading,
        modalAbierto,
        setModalAbierto,
        agregarArea,
        nombre,
        setNombre,
    };
}  