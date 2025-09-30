import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const libros = await prisma.area.findMany();
    return NextResponse.json(libros);
  } catch (error) {
    console.error("Error real:", error);
    return NextResponse.json(
      { error: "Error al obtener libros" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const { titulo, autor, archivo, nombre } = await req.json();
  try {
    const libro = await prisma.area.create({
      data: { nombre },
    });
    return NextResponse.json(libro, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al crear libro " },
      { status: 500 }
    );
  }
}
