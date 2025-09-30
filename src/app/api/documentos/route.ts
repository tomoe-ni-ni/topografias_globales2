import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const documentos = await prisma.documento.findMany({
      include: {
        cliente: true,
        proyecto: true,
        estado: true,
        area: true,
        usuario: true,
      },
    });

    return NextResponse.json(documentos);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener documentos" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      nombre_documento,
      tipo_documento,
      archivo,
      descripcion,
      folio,
      ID_cliente,
      ID_proyecto,
      ID_estado_documento,
      ID_area,
      ID_usuario,
    } = body;

    if (!nombre_documento) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const documento = await prisma.documento.create({
      data: {
        nombre_documento,
        tipo_documento,
        archivo,
        descripcion,
        folio,
        ID_cliente,
        ID_proyecto,
        ID_estado_documento,
        ID_area,
        ID_usuario,
      },
    });
    const documentoCompleto = await prisma.documento.findUnique({
      where: { ID_documento: documento.ID_documento },
      include: { cliente: true, proyecto: true, estado: true, area: true },
    });

    return NextResponse.json(documentoCompleto, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al crear documento" },
      { status: 500 }
    );
  }
}
