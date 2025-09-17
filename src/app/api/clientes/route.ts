import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  let usuarioCreado = null;
  try {
    const body = await req.json();
    const { password, nombre, apellidos, email, telefono, direccion } = body;

    if (
      !password ||
      !nombre ||
      !apellidos ||
      !email ||
      !telefono ||
      !direccion
    ) {
      return NextResponse.json({ error: "Campos faltantes" }, { status: 400 });
    }

    const prefijo = "C";

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

    // Crear usuario
    usuarioCreado = await prisma.usuario.create({
      data: {
        codigo_usuario,
        password_hash,
        rol: "client",
        nombre,
        estado: "activo",
      },
    });

    // Crear cliente vinculado al usuario
    const cliente = await prisma.cliente.create({
      data: {
        user_id: usuarioCreado.id,
        nombre,
        apellidos,
        email,
        telefono,
        direccion,
      },
    });

    const clienteCompleto = await prisma.cliente.findUnique({
      where: { id: cliente.id },
      include: { usuario: true },
    });

    return NextResponse.json(clienteCompleto, { status: 201 });
  } catch (error) {
    // Si ya se creó el usuario pero falló el cliente, elimina el usuario
    if (usuarioCreado) {
      try {
        await prisma.usuario.delete({ where: { id: usuarioCreado.id } });
      } catch (deleteError) {
        console.error(
          "Error al eliminar usuario tras fallo en cliente:",
          deleteError
        );
      }
    }
    console.error("Error al crear cliente/usuario:", error);
    return NextResponse.json(
      { error: "Error al crear cliente/usuario" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const clientes = await prisma.cliente.findMany({
      include: { usuario: true },
      orderBy: { created_at: "asc" },
      where: { deleted_at: null },
    });
    return NextResponse.json(clientes);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener clientes" },
      { status: 500 }
    );
  }
}
