import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

import { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    correo?: string;
    rol?: string;
    ID_usuario?: string;
  }
  interface Session {
    user: {
      ID_usuario?: string | null;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      correo?: string;
      rol?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    correo?: string;
    rol?: string;
  }
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        correo: { label: "Usuario", type: "text" },
        contrasena: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const userFound = await prisma.usuario.findUnique({
          where: {
            correo: credentials?.correo,
          },
        });
        if (!userFound) throw new Error("Usuario no encontrado");
        const isPasswordValid = await bcrypt.compare(
          credentials?.contrasena || "",
          userFound.contrasena
        );
        if (!isPasswordValid) throw new Error("Contraseña incorrecta");

        return {
          id: String(userFound.ID_usuario),
          ID_usuario: String(userFound.ID_usuario),
          name: userFound.nombre,
          correo: userFound.correo,
          rol: userFound.rol,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        token.ID_usuario = String(user.ID_usuario);
        token.correo = user.correo;
        token.rol = user.rol;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.ID_usuario =
          typeof token.ID_usuario === "string" ? token.ID_usuario : null;
        session.user.correo = token.correo;
        session.user.rol = token.rol;
      }
      return session;
    },
  },
};
