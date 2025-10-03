import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/reportes?tipo=documentosPorMes
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const tipo = searchParams.get("tipo");

  try {
    let data;

    switch (tipo) {
      // 1. Cantidad de documentos por mes
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

      // 2. Contador de clientes
      case "contadorClientes":
        data = await prisma.cliente.count();
        break;

      // 3. Cantidad de clientes por mes
      case "clientesPorMes":
        data = await prisma.$queryRaw<{ mes: Date; cantidad: bigint }[]>`
    SELECT DATE_TRUNC('month', "created_at") AS mes, COUNT(*) AS cantidad
    FROM "Cliente"
    GROUP BY mes
    ORDER BY mes;
  `;

        data = data.map((item) => ({
          mes: item.mes,
          cantidad: Number(item.cantidad), // 👈 conversión BigInt → number
        }));
        break;

      // 4. Ranking de proyectos por cantidad de documentos
      case "rankingProyectos":
        data = await prisma.documento.groupBy({
          by: ["ID_proyecto"],
          _count: { ID_documento: true },
          orderBy: { _count: { ID_documento: "desc" } },
        });

        // Opcional: incluir nombres de proyectos
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
      // 5. Estado de documentos
      case "estadoDocumentos":
        data = await prisma.estado_documento.findMany({
          select: {
            estado: true,
            _count: {
              select: {
                documentos: {
                  where: { deleted_at: null }, // 👈 validar que documentos no estén eliminados
                },
              },
            },
          },
        });
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        console.log(data);
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
