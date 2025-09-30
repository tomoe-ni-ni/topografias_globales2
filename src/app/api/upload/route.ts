import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No se envió archivo" },
        { status: 400 }
      );
    }

    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `uploads/${fileName}`;

    const { error } = await supabase.storage
      .from("documentos")
      .upload(filePath, file);

    if (error) throw error;

    return NextResponse.json({ path: filePath });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
