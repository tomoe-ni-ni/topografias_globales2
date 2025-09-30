import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: any) {
  const decodedPath = decodeURIComponent(context.params.path);
  try {
    const { searchParams } = new URL(req.url);
    const time = Number(searchParams.get("time")) || 60;

    const decodedPath = decodeURIComponent(context.params.path);

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
