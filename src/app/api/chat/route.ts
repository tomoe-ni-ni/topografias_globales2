import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const SYSTEM_PROMPT = `Eres el asistente del proyecto "TaskFlow Pro".

SOBRE EL PROYECTO:
TaskFlow Pro es una aplicación de gestión de tareas empresariales que ayuda
a equipos remotos a colaborar eficientemente.

CARACTERÍSTICAS:
- Tableros Kanban personalizables
- Chat en tiempo real entre miembros
- Notificaciones push
- Reportes y analytics
- Integración con Google Calendar

TECNOLOGÍAS:
- Frontend: Next.js 14, React, Tailwind
- Backend: API Routes, Prisma
- Base de datos: PostgreSQL
- Autenticación: NextAuth.js

PRECIOS:
- Plan gratuito: hasta 3 proyectos
- Plan Pro: $9.99/mes, proyectos ilimitados
- Plan Empresa: Contactar para cotización

INSTRUCCIONES:
- Instalación: https://github.com/taskflow-pro/taskflow-pro
- Documentación: https://docs.taskflow.pro
- Soporte:
  - Telegram: https://t.me/taskflowpro
  - Email: support@taskflow.pro
  - Twitter: https://twitter.com/taskflowpro
  - Discord: https://discord.gg/taskflowpro

FUNCIONES:
- Crear proyecto
- Agregar miembros
- Editar proyecto
- Configurar notificaciones
- Configurar chat
- Configurar calendario
- Configurar reportes
- Configurar análisis
- Configurar plan

Responde preguntas sobre características, precios, tecnología y cómo usar la app.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const lastMessage = messages[messages.length - 1].content;
   
    const prompt = `${SYSTEM_PROMPT}\n\nUsuario: ${lastMessage}\nAsistente:`;

    const result = await model.generateContent(prompt);
    const response = result.response.text();

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
