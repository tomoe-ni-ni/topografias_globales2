import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { nanoid } from "nanoid";
import bcrypt from "bcryptjs";

// **CREATE**: Crear un nuevo usuario
export async function POST(req: NextRequest) {
  const body = await req.json();

  const { password, rol, nombre, estado } = body;

  if (!password || !rol || !nombre || !estado) {
    return NextResponse.json({ error: "Campos faltantes" }, { status: 400 });
  }

  let prefijo = "C";
  if (rol === "admin") prefijo = "A";
  else if (rol === "client") prefijo = "C";

  const year = new Date().getFullYear().toString().slice(-2);
  const lastUser = await prisma.usuario.findFirst({
    where: { codigo_usuario: { startsWith: `${prefijo}${year}` } },
    orderBy: { id: "desc" },
  });
  const correlativo = lastUser
    ? String(Number(lastUser.codigo_usuario.slice(3)) + 1).padStart(5, "0")
    : "00001";

  const password_hash = await bcrypt.hash(password, 10);
  const codigo_usuario = `${prefijo}${year}${correlativo}`;

  try {
    const nuevoUsuario = await prisma.usuario.create({
      data: {
        codigo_usuario,
        password_hash,
        rol,
        nombre,
        estado,
      },
    });

    return NextResponse.json(nuevoUsuario, { status: 201 });
  } catch (error) {
    console.error("Error al crear usuario:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}

// **READ (ALL)**: Obtener todos los usuarios o filtrar por rol
export async function GET(req: NextRequest) {
  try {
    const rol = req.nextUrl.searchParams.get("rol");
    const where: any = { deleted_at: null };
    if (rol) where.rol = rol;

    const usuarios = await prisma.usuario.findMany({
      orderBy: { created_at: "asc" },
      where,
      select: {
        id: true,
        codigo_usuario: true,
        rol: true,
        nombre: true,
        estado: true,
        created_at: true,
      },
    });

    const usuariosFormateados = usuarios.map((u) => ({
      id: u.id,
      codigo_usuario: u.codigo_usuario,
      rol: u.rol,
      nombre: u.nombre ?? "",
      estado: u.estado ?? "activo",
      created_at: u.created_at?.toISOString().slice(0, 10) ?? "",
      // imagen: u.imagen ?? null,
    }));

    return NextResponse.json(usuariosFormateados);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
