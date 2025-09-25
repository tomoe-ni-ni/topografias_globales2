import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React, { Dispatch, SetStateAction } from "react";
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
                <p className="cursor-pointer italic underline">{"ver aqui"}</p>
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
                Descripcion del documento
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
