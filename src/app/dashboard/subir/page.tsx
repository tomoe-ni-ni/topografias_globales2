"use client";

import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [filePath, setFilePath] = useState<string | null>(null);
  const [signedUrl, setSignedUrl] = useState<string | null>(null);

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setUploading(false);

    if (data.error) {
      alert("Error: " + data.error);
    } else {
      setFilePath(data.path);
    }
  };

  const getSignedUrl = async () => {
    if (!filePath) return;
    const res = await fetch(`/api/files/${encodeURIComponent(filePath)}?time=60`);
    const data = await res.json();
    if (data.url) {
      setSignedUrl(data.url);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto space-y-4 border rounded-xl shadow">
      <h1 className="text-xl font-bold">Subir archivo privado</h1>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        {uploading ? "Subiendo..." : "Subir"}
      </button>

      {filePath && (
        <div className="space-y-2">
          <p className="text-sm text-gray-700">Archivo guardado en: {filePath}</p>
          <button
            onClick={getSignedUrl}
            className="px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            Generar URL temporal
          </button>
        </div>
      )}

      {signedUrl && (
        <a
          href={signedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-blue-500 underline"
        >
          Abrir archivo (URL temporal)
        </a>
      )}
    </div>
  );
}