import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FileText } from "lucide-react";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Documento } from "../domain/documentos.entity";

export default function DetallesDocumento({
  documentoSeleccionado,
  setModalVer,
  modalVer,
}: {
  documentoSeleccionado: Documento | null;
  setModalVer: Dispatch<SetStateAction<boolean>>;
  modalVer: boolean;
}) {
  const [cargandoUrl, setCargandoUrl] = useState(false);

  const verDocumento = async () => {
    if (!documentoSeleccionado?.archivo) {
      alert("No hay archivo disponible");
      return;
    }

    setCargandoUrl(true);
    try {
      const response = await fetch(
        `/api/storage/signed-url/${encodeURIComponent(
          documentoSeleccionado.archivo
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
    <Dialog open={modalVer} onOpenChange={setModalVer}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detalles del documento</DialogTitle>
        </DialogHeader>
        {documentoSeleccionado && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Nombre del documento
                </p>
                <p>{documentoSeleccionado.nombre_documento}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Tipo de documento
                </p>
                <p>{documentoSeleccionado.tipo_documento}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Archivo
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto font-normal"
                  onClick={verDocumento}
                  disabled={!documentoSeleccionado.archivo || cargandoUrl}
                >
                  <FileText className="mr-1 h-4 w-4" />
                  {cargandoUrl ? "Abriendo..." : "Ver archivo"}
                </Button>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Folio
                </p>
                <p>{documentoSeleccionado.folio}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Cliente
                </p>
                <p>{documentoSeleccionado.cliente?.nombre}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Proyecto
                </p>
                <p>{documentoSeleccionado.proyecto?.nombre}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Area
                </p>
                <p>{documentoSeleccionado.area?.nombre}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Fecha de registro
                </p>
                <p>
                  {documentoSeleccionado.created_at
                    ? documentoSeleccionado.created_at.split("T")[0]
                    : ""}
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Descripción del documento
              </p>
              <p>{documentoSeleccionado.descripcion}</p>
            </div>
          </div>
        )}
        <DialogFooter>
          <Button onClick={() => setModalVer(false)}>Cerrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}