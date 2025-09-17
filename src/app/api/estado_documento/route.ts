import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const estado_documentos = await prisma.estado_documento.findMany();
    return NextResponse.json(estado_documentos);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener estados de documentos" },
      { status: 500 }
    );
  }
}