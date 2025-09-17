/*
  Warnings:

  - You are about to drop the column `nombre_distrito` on the `Cliente` table. All the data in the column will be lost.
  - Added the required column `nombre_provincia` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cliente" DROP COLUMN "nombre_distrito",
ADD COLUMN     "nombre_provincia" TEXT NOT NULL;
