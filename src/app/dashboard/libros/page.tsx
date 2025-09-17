"use client";
import { useLibros } from "./hooks/useLibros";
import { useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSession } from "next-auth/react";

export default function Libros() {
  const {
    libros,
    agregarLibro,
    eliminarLibro,
    nuevoLibro,
    nuevoAutor,
    nuevoTitulo,
    setNuevoLibro,
    setNuevoAutor,
    setNuevoTitulo,
    setModalAbierto,
    modalAbierto
  } = useLibros();

  const handleArchivo = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setNuevoLibro(file);
  };

  return (
    <div className="w-full mx-auto py-8">
      <div className="flex items-center justify-between mb-4">
        <Typography size="large" variant="h1">
          Mis libros
        </Typography>
        <Button onClick={() => setModalAbierto(true)}>Agregar Libros</Button>
      </div>
      <Dialog open={modalAbierto} onOpenChange={setModalAbierto}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Agregar libro</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <Input
              value={nuevoTitulo}
              onChange={(e) => setNuevoTitulo(e.target.value)}
              placeholder="Título"
            />
            <Input
              value={nuevoAutor}
              onChange={(e) => setNuevoAutor(e.target.value)}
              placeholder="Autor"
            />
            <Input
              type="file"
              accept="application/pdf"
              onChange={handleArchivo}
            />
            {nuevoLibro && (
              <span className="text-xs text-muted-foreground">
                Archivo listo para cargar: {nuevoLibro?.name}
              </span>
            )}
            <Button
              onClick={agregarLibro}
              disabled={!nuevoTitulo || !nuevoAutor || !nuevoLibro}
            >
              Guardar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {libros.map((libro) => (
          <Card key={libro.id}>
            <CardContent className="pt-4">
              <Typography variant="h2" size="medium">
                {libro.titulo}
              </Typography>
              <div className="text-sm mb-2">Autor: {libro.autor}</div>
              <Button asChild>
                <a
                  href={libro.archivo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leer PDF
                </a>
              </Button>
              <Button
                variant="destructive"
                size="sm"
                className="ml-2"
                onClick={() => eliminarLibro(libro.id)}
              >
                Eliminar
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
