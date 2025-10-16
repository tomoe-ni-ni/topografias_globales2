import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  FileText,
  User,
  Building2,
  FolderOpen,
  MapPin,
  Calendar,
} from "lucide-react";
import { Documento } from "../../documentos/domain/documentos.entity";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function DocumentoDetalle({
  documento,
}: {
  documento: Documento | undefined;
}) {
  const [cargandoUrl, setCargandoUrl] = useState(false);

  let color = "";
  if (documento?.estado?.estado === "Iniciado") {
    color = "bg-green-500";
  } else if (documento?.estado?.estado === "En proceso") {
    color = "bg-yellow-500";
  } else if (documento?.estado?.estado === "Rechazado") {
    color = "bg-red-500";
  }

  const verDocumento = async () => {
    if (!documento?.archivo) {
      alert("No hay archivo disponible");
      return;
    }

    setCargandoUrl(true);
    try {
      const response = await fetch(
        `/api/storage/signed-url/${encodeURIComponent(
          documento.archivo
        )}?time=3600`
      );

      if (!response.ok) {
        throw new Error("Error al generar URL del documento");
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      window.open(data.url, "_blank");
    } catch (error: any) {
      console.error("Error al abrir documento:", error);
      alert("Error al abrir el documento: " + error.message);
    } finally {
      setCargandoUrl(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-2xl font-bold">
              {documento ? documento.nombre_documento : ""}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Folio: {documento ? documento.folio : ""}
            </p>
          </div>
          <Badge variant="default" className={`text-sm ${color}`}>
            {documento?.estado?.estado || ""}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Tipo:</span>
              <span className="text-muted-foreground">
                {documento?.tipo_documento || ""}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Usuario:</span>
              <span className="text-muted-foreground">
                {documento?.usuario?.nombre || ""}{" "}
                {documento?.usuario?.apellido || ""}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Área:</span>
              <span className="text-muted-foreground">
                {documento?.area?.nombre || ""}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Cliente:</span>
              <span className="text-muted-foreground">
                {documento?.cliente?.nombre || ""}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FolderOpen className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Proyecto:</span>
              <span className="text-muted-foreground">
                {documento?.proyecto?.nombre || ""}
                {documento?.proyecto?.ID_proyecto &&
                  ` (${documento?.proyecto?.ID_proyecto || ""})`}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Creado:</span>
              <span className="text-muted-foreground">
                {documento?.created_at?.split("T")[0] || ""}
              </span>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <h3 className="font-semibold">Descripción</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {documento?.descripcion}
          </p>
        </div>

        <Separator />

        <div className="space-y-2">
          <h3 className="font-semibold">Archivo</h3>
          <Button
            onClick={verDocumento}
            disabled={!documento?.archivo || cargandoUrl}
            variant="outline"
            className="inline-flex items-center gap-2"
          >
            <FileText className="h-4 w-4" />
            {cargandoUrl ? "Abriendo..." : "Ver documento"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
