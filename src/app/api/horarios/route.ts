import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const user_id = req.nextUrl.searchParams.get("user_id");
  const where = user_id ? { user_id: Number(user_id) } : {};
  try {
    const horarios = await prisma.area.findMany({});
    return NextResponse.json(horarios);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener horarios" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { user_id, dia, hora, titulo, color, nombre } = await req.json();

    if (!user_id || !dia || !hora || !titulo || !nombre) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const horario = await prisma.area.create({
      data: { nombre },
    });
    return NextResponse.json(horario, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: `Error al crear horario` },
      { status: 500 }
    );
  }
}
