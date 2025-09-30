import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, context: any) {
  const params = await context.params;
  const id = Number(params.id);
  const data = await req.json();
  try {
    const tarea = await prisma.area.update({
      where: { ID_area: id },
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
  const params = await context.params;
  const id = Number(params.id);
  try {
    await prisma.area.delete({ where: { ID_area: id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al eliminar tarea" },
      { status: 500 }
    );
  }
}
