import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const user_id = req.nextUrl.searchParams.get("user_id");
  const where = user_id ? { user_id: Number(user_id) } : {};
  try {
    const horarios = await prisma.horario.findMany({ where });
    return NextResponse.json(horarios);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener horarios" },
      { status: 500 }
    );
  }
}

// POST: Crear un horario
export async function POST(req: NextRequest) {
  try {
    const { user_id, dia, hora, titulo, color, descripcion } = await req.json();

    // Validación básica
    if (!user_id || !dia || !hora || !titulo || !color) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const horario = await prisma.horario.create({
      data: { user_id: Number(user_id), dia, hora, titulo, color, descripcion },
    });
    return NextResponse.json(horario, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: `Error al crear horario` },
      { status: 500 }
    );
  }
}
