import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const tipo = searchParams.get("tipo");

  try {
    let data;

    switch (tipo) {
      case "documentosPorMes":
        data = await prisma.$queryRaw<{ mes: Date; cantidad: bigint }[]>`
    SELECT DATE_TRUNC('month', "created_at") AS mes, COUNT(*) AS cantidad
    FROM "Documento"
    GROUP BY mes
    ORDER BY mes;
  `;
        data = data.map((item) => ({
          mes: item.mes,
          cantidad: Number(item.cantidad),
        }));

        break;

      case "contadorClientes":
        data = await prisma.cliente.count();
        break;

      case "clientesPorMes":
        data = await prisma.$queryRaw<{ mes: Date; cantidad: bigint }[]>`
    SELECT DATE_TRUNC('month', "created_at") AS mes, COUNT(*) AS cantidad
    FROM "Cliente"
    GROUP BY mes
    ORDER BY mes;
  `;

        data = data.map((item) => ({
          mes: item.mes,
          cantidad: Number(item.cantidad),
        }));
        break;

      case "rankingProyectos":
        data = await prisma.documento.groupBy({
          by: ["ID_proyecto"],
          _count: { ID_documento: true },
          orderBy: { _count: { ID_documento: "desc" } },
        });

        data = await Promise.all(
          data.map(async (item) => {
            const proyecto = await prisma.proyecto.findUnique({
              where: { ID_proyecto: item.ID_proyecto },
              select: { nombre: true },
            });
            return {
              ...item,
              proyecto: proyecto?.nombre || "Sin nombre",
            };
          })
        );
        break;

      default:
        return NextResponse.json(
          { error: "Tipo de reporte no válido" },
          { status: 400 }
        );

      case "estadoDocumentos":
        data = await prisma.estado_documento.findMany({
          select: {
            estado: true,
            _count: {
              select: {
                documentos: {
                  where: { deleted_at: null },
                },
              },
            },
          },
        });
        data = data.map((item) => ({
          name: item.estado,
          value: item._count.documentos,
        }));
        break;
    }
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: "Error generando el reporte" },
      { status: 500 }
    );
  }
}
