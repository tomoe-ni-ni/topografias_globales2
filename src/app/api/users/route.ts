import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { nanoid } from "nanoid";
import bcrypt from "bcryptjs";

// **CREATE**: Crear un nuevo usuario
export async function POST(req: NextRequest) {
  const body = await req.json();

  // Aceptar tanto 'contrasena' como 'password' por compatibilidad
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

    // Buscar el usuario recién creado con el área relacionada
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

    // Asegurar que siempre se retornen estado y fecha_ingreso aunque sean null
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

// **READ (ALL)**: Obtener todos los usuarios o filtrar por rol
export async function GET(req: NextRequest) {
  try {
    const rol = req.nextUrl.searchParams.get("rol");
    const where: any = {};
    if (rol) where.rol = rol;

    const usuarios = await prisma.usuario.findMany({
      where,
      select: {
        ID_usuario: true,
        fecha_ingreso: true,
        estado: true,
        nombre: true,
        apellido: true,
        correo: true,
        rol: true,
        ID_area: true,
        area: {
          select: {
            nombre: true,
          },
        },
      },
    });

    return NextResponse.json(usuarios);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
