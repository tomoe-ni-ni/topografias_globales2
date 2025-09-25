import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Proyecto } from "@/generated/prisma";
import { Dispatch, SetStateAction } from "react";

export default function DetallesProyecto({
  proyectoSeleccionado,
  setModalVer,
  modalVer,
}: {
  proyectoSeleccionado: Proyecto | null;
  setModalVer: Dispatch<SetStateAction<boolean>>;
  modalVer: boolean;
}) {
  return (
    <Dialog open={modalVer} onOpenChange={setModalVer}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detalles del proyecto</DialogTitle>
        </DialogHeader>

        {proyectoSeleccionado ? (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  ID Proyecto
                </p>
                <p>{proyectoSeleccionado.ID_proyecto ?? "—"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Nombre del proyecto
                </p>
                <p>{proyectoSeleccionado.nombre || "Sin nombre"}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Descripción
                </p>
                <p>{proyectoSeleccionado.descripcion || "Sin descripción"}</p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">
            No se seleccionó ningún proyecto.
          </p>
        )}

        <DialogFooter>
          <Button onClick={() => setModalVer(false)}>Cerrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
