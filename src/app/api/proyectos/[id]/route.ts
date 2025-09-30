import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, context: any) {
  const params = await context.params;

  const id = Number(params.id);
  const body = await req.json();
  const { nombre, descripcion } = body;

  if (!id || isNaN(id)) {
    return NextResponse.json(
      { error: "ID no proporcionado o inválido" },
      { status: 400 }
    );
  }

  try {
    const proyecto = await prisma.proyecto.update({
      where: { ID_proyecto: id },
      data: {
        nombre,
        descripcion,
      },
    });

    return NextResponse.json(proyecto);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al actualizar proyecto" },
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
    const proyecto = await prisma.proyecto.delete({
      where: { ID_proyecto: id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al eliminar proyecto" },
      { status: 500 }
    );
  }
}
