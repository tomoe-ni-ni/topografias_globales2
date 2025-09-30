import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre } = body;

    if (!nombre) {
      return NextResponse.json({ error: "Campos faltantes" }, { status: 400 });
    }

    const area = await prisma.area.create({
      data: {
        nombre: nombre,
      },
    });

    return NextResponse.json(area, { status: 201 });
  } catch (error) {
    console.error("Error al crear area:", error);
    return NextResponse.json({ error: "Error al crear area" }, { status: 500 });
  }
}
export async function GET(req: NextRequest) {
  try {
    const areas = await prisma.area.findMany({
      orderBy: {
        ID_area: "asc",
      },
    });
    return NextResponse.json(areas);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener areas" },
      { status: 500 }
    );
  }
}
