import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre,apellido,nombre_departamento,nombre_provincia } = body;

    if (
      !nombre_departamento ||
      !nombre ||
      !apellido ||
      !nombre_provincia
    ) {
      return NextResponse.json({ error: "Campos faltantes" }, { status: 400 });
    };

    // Crear cliente vinculado al usuario
    const cliente = await prisma.cliente.create({
      data: {
        nombre: nombre,
        apellido: apellido,
        nombre_departamento: nombre_departamento,
        nombre_provincia: nombre_provincia,
      },
    });

    return NextResponse.json(cliente, { status: 201 });
  } catch (error) {
    console.error("Error al crear cliente:", error);
    return NextResponse.json(
      { error: "Error al crear cliente" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const clientes = await prisma.cliente.findMany();
    return NextResponse.json(clientes);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener clientes" },
      { status: 500 }
    );
  }
}
