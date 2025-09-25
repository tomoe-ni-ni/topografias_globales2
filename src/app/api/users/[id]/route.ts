import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// **UPDATE**: Actualizar un usuario existente
export async function PUT(req: NextRequest, context: any) {
  const { params } = await context;
  const id = Number(params.id);
  const body = await req.json();
  const { nombre, estado, ID_area } = body;

  if (!id || isNaN(id)) {
    return NextResponse.json(
      { error: "ID no proporcionado o inválido" },
      { status: 400 }
    );
  }

  try {
    const usuarioActualizado = await prisma.usuario.update({
      where: { ID_usuario: id },
      data: { nombre, estado, ID_area },
    });
    return NextResponse.json(usuarioActualizado);
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}

// **DELETE**: Eliminar un usuario (borrado lógico)
export async function DELETE(req: NextRequest, context: any) {
  const { params } = await context;
  const id = Number(params.id);

  if (!id || isNaN(id)) {
    return NextResponse.json(
      { error: "ID no proporcionado o inválido" },
      { status: 400 }
    );
  }

  try {
    const usuarioEliminado = await prisma.usuario.delete({
      where: { ID_usuario: id },
    });
    return NextResponse.json(usuarioEliminado);
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
