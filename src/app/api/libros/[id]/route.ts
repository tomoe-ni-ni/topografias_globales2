import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, context: any) {
  const params = await context.params;
  const id = Number(params.id);
  const data = await req.json();
  const libro = await prisma.area.update({ where: { ID_area:id }, data });
  return NextResponse.json(libro);
}

export async function DELETE(req: NextRequest, context: any) {
  const params = await context.params;
  const id = Number(params.id);
  await prisma.area.delete({ where: { ID_area:id } });
  return NextResponse.json({ success: true });
}
