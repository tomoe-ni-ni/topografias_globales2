/*
  Warnings:

  - You are about to drop the column `nombre` on the `Zona` table. All the data in the column will be lost.
  - Added the required column `nombre_departamento` to the `Zona` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre_distrito` to the `Zona` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Zona" DROP COLUMN "nombre",
ADD COLUMN     "nombre_departamento" TEXT NOT NULL,
ADD COLUMN     "nombre_distrito" TEXT NOT NULL;
