import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const asignado_a = req.nextUrl.searchParams.get("asignado_a");
  const where = asignado_a ? { asignado_a: Number(asignado_a) } : {};
  try {
    const tareas = await prisma.area.findMany({});
    return NextResponse.json(tareas);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener tareas" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const { asignado_a, titulo, descripcion, nombre } = await req.json();
  try {
    if (!asignado_a || !titulo || !descripcion || !nombre) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const tarea = await prisma.area.create({
      data: { nombre },
    });
    return NextResponse.json(tarea, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al crear tarea" },
      { status: 500 }
    );
  }
}
