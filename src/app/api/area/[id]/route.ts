import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, context: any) {
  const params = await context.params;

  const id = Number(params.id);
  const body = await req.json();
  const { nombre } = body;

  if (!id || isNaN(id)) {
    return NextResponse.json(
      { error: "ID no proporcionado o inválido" },
      { status: 400 }
    );
  }

  try {
    const area = await prisma.area.update({
      where: { ID_area: id },
      data: {
        nombre,
      },
    });

    return NextResponse.json(area);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al actualizar estado documento" },
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
    const area = await prisma.area.delete({
      where: { ID_area: id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al eliminar estado documento" },
      { status: 500 }
    );
  }
}
