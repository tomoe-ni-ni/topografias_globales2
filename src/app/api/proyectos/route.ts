import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre,descripcion } = body;

    if (
      !nombre ||
      !descripcion
    ) {
      return NextResponse.json({ error: "Campos faltantes" }, { status: 400 });
    };

    // Crear cliente vinculado al usuario
    const proyecto = await prisma.proyecto.create({
      data: {
        nombre: nombre,
        descripcion: descripcion,
      },
    });

    return NextResponse.json(proyecto, { status: 201 });
  } catch (error) {
    console.error("Error al crear proyecto:", error);
    return NextResponse.json(
      { error: "Error al crear proyecto" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const proyectos = await prisma.proyecto.findMany();
    return NextResponse.json(proyectos);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener proyectos" },
      { status: 500 }
    );
  }
}