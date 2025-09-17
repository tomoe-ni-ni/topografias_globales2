/*
  Warnings:

  - You are about to drop the column `ID_zona` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the `Zona` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `nombre_departamento` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre_distrito` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Cliente" DROP CONSTRAINT "Cliente_ID_zona_fkey";

-- AlterTable
ALTER TABLE "Cliente" DROP COLUMN "ID_zona",
ADD COLUMN     "nombre_departamento" TEXT NOT NULL,
ADD COLUMN     "nombre_distrito" TEXT NOT NULL;

-- DropTable
DROP TABLE "Zona";
