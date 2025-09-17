import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: any) {
  const { params } = await context;
  const id = Number(params.id);
  try {
    const horario = await prisma.horario.findUnique({ where: { id } });
    if (!horario) {
      return NextResponse.json(
        { error: "Horario no encontrado" },
        { status: 404 }
      );
    }
    return NextResponse.json(horario);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener horario" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest, context: any) {
  const { params } = await context;
  const id = Number(params.id);
  const data = await req.json();
  try {
    const horario = await prisma.horario.update({ where: { id }, data });
    return NextResponse.json(horario);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al actualizar horario" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, context: any) {
  const { params } = await context;
  const id = Number(params.id);
  try {
    await prisma.horario.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al eliminar horario" },
      { status: 500 }
    );
  }
}
