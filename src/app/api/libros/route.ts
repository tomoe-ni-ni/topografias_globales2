import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET: Listar libros
export async function GET() {
  try {
    const libros = await prisma.libro.findMany();
    return NextResponse.json(libros);
  } catch (error) {
    console.error("Error real:", error);
    return NextResponse.json(
      { error: "Error al obtener libros" },
      { status: 500 }
    );
  }
}

// POST: Crear libro
export async function POST(req: NextRequest) {
  const { titulo, autor, archivo, asignado_a } = await req.json();
  try {
    const libro = await prisma.libro.create({
      data: { titulo, autor, archivo, asignado_a },
    });
    return NextResponse.json(libro, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al crear libro " },
      { status: 500 }
    );
  }
}
