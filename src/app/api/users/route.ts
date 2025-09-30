import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const password = body.contrasena || body.password;
  const { rol, nombre, correo, ID_area, apellido, estado } = body;

  if (
    !password ||
    !rol ||
    !nombre ||
    !correo ||
    !ID_area ||
    !apellido ||
    !estado
  ) {
    return NextResponse.json({ error: "Campos faltantes" }, { status: 400 });
  }

  const contrasena = await bcrypt.hash(password, 10);

  try {
    const nuevoUsuario = await prisma.usuario.create({
      data: {
        nombre,
        apellido,
        correo,
        contrasena,
        rol,
        estado: estado ?? undefined,
        ID_area: ID_area ?? null,
      },
    });

    const usuarioConArea = await prisma.usuario.findUnique({
      where: { ID_usuario: nuevoUsuario.ID_usuario },
      select: {
        ID_usuario: true,
        nombre: true,
        apellido: true,
        correo: true,
        rol: true,
        estado: true,
        ID_area: true,
        fecha_ingreso: true,
        area: { select: { nombre: true } },
      },
    });

    return NextResponse.json(
      {
        ...usuarioConArea,
        estado: usuarioConArea?.estado ?? "inactivo",
        fecha_ingreso: usuarioConArea?.fecha_ingreso ?? "",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error al crear usuario:", error);
    return NextResponse.json(
      {
        error:
          (error instanceof Error ? error.message : String(error)) ||
          "Error interno",
        detalle: String(error),
      },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const rol = req.nextUrl.searchParams.get("rol");
    const where: any = {};
    if (rol) where.rol = rol;

    const usuarios = await prisma.usuario.findMany({
      include: {
        area: true,
      },
      orderBy: {
        ID_usuario: "asc",
      },
    });

    return NextResponse.json(usuarios);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
