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
        setUsuarios(data);
      });
  }, []);

  const agregarUsuario = (usuarioNuevo: Usuarios) => {
    setUsuarios((prev) => [
      { ...usuarioNuevo, created_at: usuarioNuevo.created_at.split("T")[0] },
      ...prev,
    ]);
  };

  const actualizarUsuario = (usuarioActualizado: Usuarios) => {
    setUsuarios((prev) =>
      prev.map((u) =>
        u.id === usuarioActualizado.id
          ? {
              ...usuarioActualizado,
              created_at: usuarioActualizado.created_at.split("T")[0],
            }
          : u
      )
    );
  };

  const eliminarUsuario = (id: number) => {
    setUsuarios((prev) => prev.filter((u) => u.id !== id));
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
