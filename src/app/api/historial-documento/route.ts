
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fecha,
      ID_documento,
      ID_usuario,
      ID_estado_documento,
      documento_historial,
      descripcion,
    } = body;

    if (!ID_documento || !ID_usuario || !ID_estado_documento) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    const historial = await prisma.historial_documentos.create({
      data: {
        fecha: fecha ? new Date(fecha) : new Date(),
        ID_documento,
        ID_usuario,
        ID_estado_documento,
        documento_historial,
        descripcion,
      },
    });
    return NextResponse.json(historial, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error al crear historial" }, { status: 500 });
  }
}
