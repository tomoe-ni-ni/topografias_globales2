import { NextRequest, NextResponse } from "next/server";
import { loginSchema } from "@/zod/schemas/login.schema";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = loginSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
    }

    const { codigo_usuario, password_hash } = parsed.data;
    const user = await prisma.usuario.findUnique({ where: { codigo_usuario } });
    if (!user) {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 401 }
      );
    }

    const valid = await bcrypt.compare(password_hash, user.password_hash);
    if (!valid) {
      return NextResponse.json(
        { error: "Contraseña incorrecta" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { userId: user.id, rol: user.rol },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    return NextResponse.json({ token, rol: user.rol });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Error desconocido";
    return NextResponse.json(
      { error: "Error en el servidor: " + errorMessage },
      { status: 500 }
    );
  }
}
