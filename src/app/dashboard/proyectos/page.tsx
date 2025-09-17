"use client";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

export default function proyectos() {
    return (
        <div className="flex items-center justify-between mb-4">
        <Typography size="large" variant="h1">
          Mis proyectos
        </Typography>
        <Button onClick={() => setModalAbierto(true)}>Agregar proyecto</Button>
      </div>
    );
}