import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, context: any) {
  const params = await context.params;
  const id = Number(params.id);
  const body = await req.json();
  const { nombre_documento, descripcion, folio } = body;

  if (!id || isNaN(id)) {
    return NextResponse.json(
      { error: "ID no proporcionado o inválido" },
      { status: 400 }
    );
  }

  try {
    const documento = await prisma.documento.update({
      where: { ID_documento: id },
      data: {
        nombre_documento,
        descripcion,
        folio,
      },
    });

    const documentoCompleto = await prisma.documento.findUnique({
      where: { ID_documento: documento.ID_documento },
      include: { cliente: true, proyecto: true, estado: true, area: true },
    });

    return NextResponse.json(documentoCompleto);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al actualizar documento" },
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
    const documento = await prisma.documento.delete({
      where: { ID_documento: id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al eliminar documento" },
      { status: 500 }
    );
  }
}
