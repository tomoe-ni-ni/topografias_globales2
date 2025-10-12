import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: any
) {
  try {
    const { searchParams } = new URL(request.url);
    const time = Number(searchParams.get("time")) || 3600;

    // Await params antes de usar sus propiedades
    const params = await context.params;
    const decodedPath = decodeURIComponent(params.path);

    console.log("Generando URL para:", decodedPath);

    // Crear URL firmada con Supabase
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