import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, context: any) {
  const { params } = await context;
  const id = Number(params.id);
  const body = await req.json();
  const { nombre, apellidos, email, telefono, direccion } = body;

  if (!id || isNaN(id)) {
    return NextResponse.json(
      { error: "ID no proporcionado o inválido" },
      { status: 400 }
    );
  }

  try {
    // Actualiza cliente
    const cliente = await prisma.cliente.update({
      where: { id },
      data: {
        nombre,
        apellidos,
        email,
        telefono,
        direccion,
      },
    });
    // Actualiza usuario relacionado
    await prisma.usuario.update({
      where: { id: cliente.user_id },
      data: {
        nombre,
      },
    });

    const clienteCompleto = await prisma.cliente.findUnique({
      where: { id: cliente.id },
      include: { usuario: true },
    });

    return NextResponse.json(clienteCompleto);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al actualizar cliente/usuario" },
      { status: 500 }
    );
  }
}

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
    const cliente = await prisma.cliente.update({
      where: { id },
      data: { deleted_at: new Date() },
    });
    await prisma.usuario.update({
      where: { id: cliente.user_id },
      data: { deleted_at: new Date(), estado: "inactivo" },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al eliminar cliente/usuario" },
      { status: 500 }
    );
  }
}
