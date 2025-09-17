import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const areas = await prisma.area.findMany();
    return NextResponse.json(areas);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener areas" },
      { status: 500 }
    );
  }
}