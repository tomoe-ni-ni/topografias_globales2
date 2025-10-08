import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Dispatch, SetStateAction } from "react";
import { HistorialDocumento } from "../domain/historialDocumento.entity";
import { Separator } from "@/components/ui/separator";

export default function DetallesHistorial({
  historialSeleccionado,
  setModalVer,
  modalVer,
}: {
  historialSeleccionado: HistorialDocumento | null;
  setModalVer: Dispatch<SetStateAction<boolean>>;
  modalVer: boolean;
}) {
  let colorEstado = "";
  if (historialSeleccionado?.estado?.estado === "Iniciado") {
    colorEstado = "bg-green-500";
  } else if (historialSeleccionado?.estado?.estado === "En proceso") {
    colorEstado = "bg-yellow-500";
  } else if (historialSeleccionado?.estado?.estado === "Rechazado") {
    colorEstado = "bg-red-500";
  }

  return (
    <Dialog open={modalVer} onOpenChange={setModalVer}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Detalles del Historial</DialogTitle>
        </DialogHeader>
        {historialSeleccionado && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  ID Historial
                </p>
                <p className="text-lg font-semibold">
                  {historialSeleccionado.ID_historial}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Estado
                </p>
                <Badge variant="default" className={`text-sm mt-1 ${colorEstado}`}>
                  {historialSeleccionado.estado?.estado || ""}
                </Badge>
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Documento de Historial
                </p>
                <p>{historialSeleccionado.documento_historial}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Fecha
                </p>
                <p>
                  {historialSeleccionado.created_at
                    ? new Date(historialSeleccionado.created_at).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })
                    : ""}
                </p>
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Usuario
                </p>
                <p>
                  {historialSeleccionado.usuario?.nombre}{" "}
                  {historialSeleccionado.usuario?.apellido}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Documento Asociado
                </p>
                <p>{historialSeleccionado.documento?.nombre_documento || "N/A"}</p>
              </div>
            </div>

            <Separator />

            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">
                Descripción
              </p>
              <p className="text-sm leading-relaxed bg-muted/50 p-3 rounded-md">
                {historialSeleccionado.descripcion || "Sin descripción"}
              </p>
            </div>

            {historialSeleccionado.created_at && (
              <>
                <Separator />
                <div className="text-xs text-muted-foreground">
                  Creado el:{" "}
                  {new Date(historialSeleccionado.created_at).toLocaleString('es-ES')}
                </div>
              </>
            )}
          </div>
        )}
        <DialogFooter>
          <Button onClick={() => setModalVer(false)}>Cerrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}