import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const documentos = await prisma.documento.findMany();
    return NextResponse.json(documentos);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener documentos" },
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
