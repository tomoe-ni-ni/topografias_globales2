/*
  Warnings:

  - You are about to drop the column `ID_area` on the `Historial_documentos` table. All the data in the column will be lost.
  - You are about to drop the column `hora` on the `Historial_documentos` table. All the data in the column will be lost.
  - You are about to drop the `Detalle_historial` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Permiso` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updated_at` to the `Area` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ID_usuario` to the `Documento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Documento` table without a default value. This is not possible if the table is not empty.
  - Made the column `tipo_documento` on table `Documento` required. This step will fail if there are existing NULL values in that column.
  - Made the column `fecha_ingreso` on table `Documento` required. This step will fail if there are existing NULL values in that column.
  - Made the column `archivo` on table `Documento` required. This step will fail if there are existing NULL values in that column.
  - Made the column `descripcion` on table `Documento` required. This step will fail if there are existing NULL values in that column.
  - Made the column `folio` on table `Documento` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ID_cliente` on table `Documento` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ID_proyecto` on table `Documento` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ID_estado_documento` on table `Documento` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ID_area` on table `Documento` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `updated_at` to the `Estado_documento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descripcion` to the `Historial_documentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `documento_historial` to the `Historial_documentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Historial_documentos` table without a default value. This is not possible if the table is not empty.
  - Made the column `fecha` on table `Historial_documentos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ID_documento` on table `Historial_documentos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ID_usuario` on table `Historial_documentos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ID_estado_documento` on table `Historial_documentos` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `updated_at` to the `Proyecto` table without a default value. This is not possible if the table is not empty.
  - Made the column `descripcion` on table `Proyecto` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `updated_at` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Made the column `apellido` on table `Usuario` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ID_area` on table `Usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Detalle_historial" DROP CONSTRAINT "Detalle_historial_ID_area_fkey";

-- DropForeignKey
ALTER TABLE "Detalle_historial" DROP CONSTRAINT "Detalle_historial_ID_cliente_fkey";

-- DropForeignKey
ALTER TABLE "Detalle_historial" DROP CONSTRAINT "Detalle_historial_ID_historial_fkey";

-- DropForeignKey
ALTER TABLE "Detalle_historial" DROP CONSTRAINT "Detalle_historial_ID_proyecto_fkey";

-- DropForeignKey
ALTER TABLE "Detalle_historial" DROP CONSTRAINT "Detalle_historial_ID_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Documento" DROP CONSTRAINT "Documento_ID_area_fkey";

-- DropForeignKey
ALTER TABLE "Documento" DROP CONSTRAINT "Documento_ID_cliente_fkey";

-- DropForeignKey
ALTER TABLE "Documento" DROP CONSTRAINT "Documento_ID_estado_documento_fkey";

-- DropForeignKey
ALTER TABLE "Documento" DROP CONSTRAINT "Documento_ID_proyecto_fkey";

-- DropForeignKey
ALTER TABLE "Historial_documentos" DROP CONSTRAINT "Historial_documentos_ID_area_fkey";

-- DropForeignKey
ALTER TABLE "Historial_documentos" DROP CONSTRAINT "Historial_documentos_ID_documento_fkey";

-- DropForeignKey
ALTER TABLE "Historial_documentos" DROP CONSTRAINT "Historial_documentos_ID_estado_documento_fkey";

-- DropForeignKey
ALTER TABLE "Historial_documentos" DROP CONSTRAINT "Historial_documentos_ID_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Permiso" DROP CONSTRAINT "Permiso_ID_area_fkey";

-- DropForeignKey
ALTER TABLE "Permiso" DROP CONSTRAINT "Permiso_ID_proyecto_fkey";

-- DropForeignKey
ALTER TABLE "Permiso" DROP CONSTRAINT "Permiso_ID_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_ID_area_fkey";

-- AlterTable
ALTER TABLE "Area" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Cliente" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Documento" ADD COLUMN     "ID_usuario" INTEGER NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "tipo_documento" SET NOT NULL,
ALTER COLUMN "fecha_ingreso" SET NOT NULL,
ALTER COLUMN "archivo" SET NOT NULL,
ALTER COLUMN "descripcion" SET NOT NULL,
ALTER COLUMN "folio" SET NOT NULL,
ALTER COLUMN "ID_cliente" SET NOT NULL,
ALTER COLUMN "ID_proyecto" SET NOT NULL,
ALTER COLUMN "ID_estado_documento" SET NOT NULL,
ALTER COLUMN "ID_area" SET NOT NULL;

-- AlterTable
ALTER TABLE "Estado_documento" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Historial_documentos" DROP COLUMN "ID_area",
DROP COLUMN "hora",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "descripcion" TEXT NOT NULL,
ADD COLUMN     "documento_historial" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "fecha" SET NOT NULL,
ALTER COLUMN "ID_documento" SET NOT NULL,
ALTER COLUMN "ID_usuario" SET NOT NULL,
ALTER COLUMN "ID_estado_documento" SET NOT NULL;

-- AlterTable
ALTER TABLE "Proyecto" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "descripcion" SET NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "permisos" TEXT[] DEFAULT ARRAY['crear', 'leer', 'borrar', 'editar']::TEXT[],
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "apellido" SET NOT NULL,
ALTER COLUMN "ID_area" SET NOT NULL;

-- DropTable
DROP TABLE "Detalle_historial";

-- DropTable
DROP TABLE "Permiso";

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_ID_area_fkey" FOREIGN KEY ("ID_area") REFERENCES "Area"("ID_area") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Documento" ADD CONSTRAINT "Documento_ID_usuario_fkey" FOREIGN KEY ("ID_usuario") REFERENCES "Usuario"("ID_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Documento" ADD CONSTRAINT "Documento_ID_area_fkey" FOREIGN KEY ("ID_area") REFERENCES "Area"("ID_area") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Documento" ADD CONSTRAINT "Documento_ID_cliente_fkey" FOREIGN KEY ("ID_cliente") REFERENCES "Cliente"("ID_cliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Documento" ADD CONSTRAINT "Documento_ID_estado_documento_fkey" FOREIGN KEY ("ID_estado_documento") REFERENCES "Estado_documento"("ID_estado") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Documento" ADD CONSTRAINT "Documento_ID_proyecto_fkey" FOREIGN KEY ("ID_proyecto") REFERENCES "Proyecto"("ID_proyecto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historial_documentos" ADD CONSTRAINT "Historial_documentos_ID_documento_fkey" FOREIGN KEY ("ID_documento") REFERENCES "Documento"("ID_documento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historial_documentos" ADD CONSTRAINT "Historial_documentos_ID_estado_documento_fkey" FOREIGN KEY ("ID_estado_documento") REFERENCES "Estado_documento"("ID_estado") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historial_documentos" ADD CONSTRAINT "Historial_documentos_ID_usuario_fkey" FOREIGN KEY ("ID_usuario") REFERENCES "Usuario"("ID_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
