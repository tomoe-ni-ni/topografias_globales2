import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: any) {
  const params = await context.params;
  const id = Number(params.id);

  if (!id || isNaN(id)) {
    return NextResponse.json(
      { error: "ID no proporcionado o inválido" },
      { status: 400 }
    );
  }
  try {
    const historiales = await prisma.historial_documentos.findMany({
      where: { ID_documento: id },
      include: { usuario: true, estado: true },
      orderBy: { fecha: "desc" },
    });
    return NextResponse.json(historiales);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener historial" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest, context: any) {
  const params = await context.params;
  const id = Number(params.id);

  if (!id || isNaN(id)) {
    return NextResponse.json(
      { error: "ID no proporcionado o inválido" },
      { status: 400 }
    );
  }

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

    const historial = await prisma.historial_documentos.update({
      where: { ID_historial: id },
      data: {
        fecha: fecha ? new Date(fecha) : undefined,
        ID_documento,
        ID_usuario,
        ID_estado_documento,
        documento_historial,
        descripcion,
      },
    });
    return NextResponse.json(historial);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al actualizar historial" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, context: any) {
  const params = await context.params;
  const id = Number(params.id);

  if (!id || isNaN(id)) {
    return NextResponse.json(
      { error: "ID no proporcionado o inválido" },
      { status: 400 }
    );
  }
  try {
    await prisma.historial_documentos.delete({ where: { ID_historial: id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al eliminar historial" },
      { status: 500 }
    );
  }
}
