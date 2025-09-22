"use client";

import { TablaUsuarios } from "@/components/tablas/tabla-usuarios";
import { useEffect, useState } from "react";
import type { Usuarios } from "@/types/usuarios";

import CreateUserForm from "./components/CreateUserForm";

function Usuarios() {
  const [usuarios, setUsuarios] = useState<Usuarios[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
       console.log(data); 
        setUsuarios(data);
      });
  }, []);


  const agregarUsuario = (usuarioNuevo: Usuarios) => {
    setUsuarios((prev) => [
      {
        ...usuarioNuevo,
        fecha_ingreso: usuarioNuevo.fecha_ingreso ? usuarioNuevo.fecha_ingreso.split("T")[0] : undefined,
      },
      ...prev,
    ]);
  };


  const actualizarUsuario = (usuarioActualizado: Usuarios) => {
    setUsuarios((prev) =>
      prev.map((u) =>
        u.ID_usuario === usuarioActualizado.ID_usuario
          ? {
              ...usuarioActualizado,
              fecha_ingreso: usuarioActualizado.fecha_ingreso ? usuarioActualizado.fecha_ingreso.split("T")[0] : undefined,
            }
          : u
      )
    );
  };


  const eliminarUsuario = (id: number | string | null | undefined) => {
    setUsuarios((prev) => prev.filter((u) => u.ID_usuario !== id));
  };

  return (
    <>
      <CreateUserForm onUsuarioCreado={agregarUsuario} />
      <TablaUsuarios
        usuariosData={usuarios}
        onUsuarioEditado={actualizarUsuario}
        onUsuarioEliminado={eliminarUsuario}
      />
    </>
  );
}

export default Usuarios;
