import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, context: any) {
  const params = await context.params;

  const id = Number(params.id);
  const body = await req.json();
  const { estado } = body;

  if (!id || isNaN(id)) {
    return NextResponse.json(
      { error: "ID no proporcionado o inválido" },
      { status: 400 }
    );
  }

  try {
    const estado_documento = await prisma.estado_documento.update({
      where: { ID_estado: id },
      data: {
        estado,
      },
    });

    return NextResponse.json(estado_documento);
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
    const proyecto = await prisma.estado_documento.delete({
      where: { ID_estado: id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al eliminar estado documento" },
      { status: 500 }
    );
  }
}
