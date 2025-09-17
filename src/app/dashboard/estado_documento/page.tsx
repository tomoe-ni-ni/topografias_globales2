"use client";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

export default function estadoDocumento() {
    return (
        <div className="flex items-center justify-between mb-4">
        <Typography size="large" variant="h1">
          Mis estados de documentos
        </Typography>
        <Button onClick={() => setModalAbierto(true)}>Agregar estado</Button>
      </div>
    );
}