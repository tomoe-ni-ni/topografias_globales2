import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const asignado_a = req.nextUrl.searchParams.get("asignado_a");
  const where = asignado_a ? { asignado_a: Number(asignado_a) } : {};
  try {
    const tareas = await prisma.tarea.findMany({ where });
    return NextResponse.json(tareas);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener tareas" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const { asignado_a, titulo, descripcion, estado } = await req.json();
  try {
    // Validación básica
    if (!asignado_a || !titulo || !descripcion || !estado) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const tarea = await prisma.tarea.create({
      data: { asignado_a, titulo, descripcion, estado },
    });
    return NextResponse.json(tarea, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al crear tarea" },
      { status: 500 }
    );
  }
}
