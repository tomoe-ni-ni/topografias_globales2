import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { estado } = body;

    if (
      !estado
    ) {
      return NextResponse.json({ error: "Campos faltantes" }, { status: 400 });
    };

    // Crear cliente vinculado al usuario
    const estadoDocumento = await prisma.estado_documento.create({
      data: {
        estado: estado,
      },
    });

    return NextResponse.json(estadoDocumento, { status: 201 });
  } catch (error) {
    console.error("Error al crear estado de documento:", error);
    return NextResponse.json(
      { error: "Error al crear estado de documento" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const estadoDocumentos = await prisma.estado_documento.findMany();
    return NextResponse.json(estadoDocumentos);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener estados de documentos" },
      { status: 500 }
    );
  }
}