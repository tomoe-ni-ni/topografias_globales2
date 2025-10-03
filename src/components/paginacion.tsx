import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginacionProps {
  paginaActual: number;
  totalElementos: number;
  elementosPorPagina?: number;
  onCambioPagina: (pagina: number) => void;
}

export function Paginacion({
  paginaActual,
  totalElementos,
  elementosPorPagina = 5,
  onCambioPagina,
}: PaginacionProps) {
  const itemsPorPagina = elementosPorPagina ?? 5;
  const totalPaginas = Math.ceil(totalElementos / itemsPorPagina);
  
  if (totalElementos === 0) return null;

  const inicio = (paginaActual - 1) * itemsPorPagina + 1;
  const fin = Math.min(paginaActual * itemsPorPagina, totalElementos);

  return (
    <div className="flex items-center justify-between">
      <div className="text-sm text-muted-foreground">
        Mostrando {inicio} a {fin} de {totalElementos} registros
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => onCambioPagina(paginaActual - 1)}
          disabled={paginaActual === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((pagina) => (
          <Button
            key={pagina}
            variant={pagina === paginaActual ? "default" : "outline"}
            size="icon"
            onClick={() => onCambioPagina(pagina)}
          >
            {pagina}
          </Button>
        ))}
        <Button
          variant="outline"
          size="icon"
          onClick={() => onCambioPagina(paginaActual + 1)}
          disabled={paginaActual === totalPaginas}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}