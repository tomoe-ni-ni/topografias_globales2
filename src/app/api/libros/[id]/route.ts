import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(req: NextRequest, context: any) {
  const { params } = await context;
  const id = Number(params.id);
  const data = await req.json();
  const libro = await prisma.libro.update({ where: { id }, data });
  return NextResponse.json(libro);
}

export async function DELETE(req: NextRequest, context: any) {
  const { params } = await context;
  const id = Number(params.id);
  await prisma.libro.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
