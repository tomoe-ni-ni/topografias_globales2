import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const zonas = await prisma.zona.findMany();
    return NextResponse.json(zonas);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener areas" },
      { status: 500 }
    );
  }
}