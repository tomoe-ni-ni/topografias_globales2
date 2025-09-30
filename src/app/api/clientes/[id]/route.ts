import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, context: any) {
  const params = await context.params;
  const id = Number(params.id);
  const body = await req.json();
  const { nombre, apellido, nombre_departamento, nombre_provincia } = body;
  if (!id || isNaN(id)) {
    return NextResponse.json(
      { error: "ID no proporcionado o inválido" },
      { status: 400 }
    );
  }

  try {
    const cliente = await prisma.cliente.update({
      where: { ID_cliente: id },
      data: {
        nombre,
        apellido,
        nombre_departamento,
        nombre_provincia,
      },
    });

    return NextResponse.json(cliente);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al actualizar cliente/usuario" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, context: any) {
  const params = await context.params;
  const id = Number(params.id);

  if (!id || isNaN(id)) {
    return NextResponse.json(
      { error: "ID no proporcionado o inválido" },
      { status: 400 }
    );
  }

  try {
    const cliente = await prisma.cliente.delete({
      where: { ID_cliente: id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al eliminar cliente/usuario" },
      { status: 500 }
    );
  }
}
