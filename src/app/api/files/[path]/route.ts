import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

// /api/files/[path]?time=60
export async function GET(
  req: Request,
  { params }: { params: { path: string } }
) {
  try {
    const { searchParams } = new URL(req.url);
    const time = Number(searchParams.get("time")) || 60; // segundos

    // params.path puede venir como "uploads%2F123.pdf", lo decodificamos
    const decodedPath = decodeURIComponent(params.path);

    const { data, error } = await supabase.storage
      .from("documentos")
      .createSignedUrl(decodedPath, time);

    if (error) throw error;

    return NextResponse.json({ url: data.signedUrl });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}