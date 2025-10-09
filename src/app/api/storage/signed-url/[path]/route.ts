import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { path: string } }
) {
  try {
    // Obtener el parámetro de tiempo (por defecto 60 segundos)
    const { searchParams } = new URL(req.url);
    const time = Number(searchParams.get("time")) || 3600;

    // Decodificar el path
    const decodedPath = decodeURIComponent(params.path);

    console.log("Generando URL para:", decodedPath);

    // Crear URL firmada
    const { data, error } = await supabase.storage
      .from("documentos")
      .createSignedUrl(decodedPath, time);

    if (error) {
      console.error("Error de Supabase:", error);
      throw error;
    }

    if (!data?.signedUrl) {
      throw new Error("No se pudo generar la URL firmada");
    }

    return NextResponse.json({ url: data.signedUrl });
  } catch (err: any) {
    console.error("Error en signed-url:", err);
    return NextResponse.json(
      { error: err.message || "Error al generar URL firmada" },
      { status: 500 }
    );
  }
}