/*
  Warnings:

  - Added the required column `nombre_documento` to the `Documento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Documento" ADD COLUMN     "nombre_documento" TEXT NOT NULL;
