import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// Elimina la interfaz Context

export async function PUT(req: NextRequest, context: any) {
  const { params } = await context;
  const id = Number(params.id);
  const data = await req.json();
  try {
    const tarea = await prisma.tarea.update({
      where: { id },
      data,
    });
    return NextResponse.json(tarea);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al actualizar tarea" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, context: any) {
  const { params } = await context;
  const id = Number(params.id);
  try {
    await prisma.tarea.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al eliminar tarea" },
      { status: 500 }
    );
  }
}
