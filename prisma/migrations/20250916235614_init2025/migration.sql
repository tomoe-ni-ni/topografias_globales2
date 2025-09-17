-- CreateTable
CREATE TABLE "Zona" (
    "ID_zona" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Zona_pkey" PRIMARY KEY ("ID_zona")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "ID_cliente" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "ID_zona" INTEGER,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("ID_cliente")
);

-- CreateTable
CREATE TABLE "Proyecto" (
    "ID_proyecto" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "Proyecto_pkey" PRIMARY KEY ("ID_proyecto")
);

-- CreateTable
CREATE TABLE "Estado_documento" (
    "ID_estado" SERIAL NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Estado_documento_pkey" PRIMARY KEY ("ID_estado")
);

-- CreateTable
CREATE TABLE "Area" (
    "ID_area" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Area_pkey" PRIMARY KEY ("ID_area")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "ID_usuario" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT,
    "correo" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,
    "rol" TEXT NOT NULL,
    "ID_area" INTEGER,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("ID_usuario")
);

-- CreateTable
CREATE TABLE "Documento" (
    "ID_documento" SERIAL NOT NULL,
    "tipo_documento" TEXT,
    "fecha_ingreso" TIMESTAMP(3),
    "archivo" TEXT,
    "descripcion" TEXT,
    "folio" VARCHAR(50),
    "ID_cliente" INTEGER,
    "ID_proyecto" INTEGER,
    "ID_estado_documento" INTEGER,
    "ID_area" INTEGER,

    CONSTRAINT "Documento_pkey" PRIMARY KEY ("ID_documento")
);

-- CreateTable
CREATE TABLE "Historial_documentos" (
    "ID_historial" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3),
    "hora" TIMESTAMP(3),
    "ID_documento" INTEGER,
    "ID_usuario" INTEGER,
    "ID_area" INTEGER,
    "ID_estado_documento" INTEGER,

    CONSTRAINT "Historial_documentos_pkey" PRIMARY KEY ("ID_historial")
);

-- CreateTable
CREATE TABLE "Detalle_historial" (
    "ID_detalle" SERIAL NOT NULL,
    "ID_usuario" INTEGER,
    "ID_historial" INTEGER,
    "ID_proyecto" INTEGER,
    "ID_area" INTEGER,
    "ID_cliente" INTEGER,

    CONSTRAINT "Detalle_historial_pkey" PRIMARY KEY ("ID_detalle")
);

-- CreateTable
CREATE TABLE "Permiso" (
    "ID_permiso" SERIAL NOT NULL,
    "tipo_permiso" TEXT,
    "ID_usuario" INTEGER,
    "ID_area" INTEGER,
    "ID_proyecto" INTEGER,

    CONSTRAINT "Permiso_pkey" PRIMARY KEY ("ID_permiso")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_correo_key" ON "Usuario"("correo");

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_ID_zona_fkey" FOREIGN KEY ("ID_zona") REFERENCES "Zona"("ID_zona") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_ID_area_fkey" FOREIGN KEY ("ID_area") REFERENCES "Area"("ID_area") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Documento" ADD CONSTRAINT "Documento_ID_area_fkey" FOREIGN KEY ("ID_area") REFERENCES "Area"("ID_area") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Documento" ADD CONSTRAINT "Documento_ID_cliente_fkey" FOREIGN KEY ("ID_cliente") REFERENCES "Cliente"("ID_cliente") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Documento" ADD CONSTRAINT "Documento_ID_estado_documento_fkey" FOREIGN KEY ("ID_estado_documento") REFERENCES "Estado_documento"("ID_estado") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Documento" ADD CONSTRAINT "Documento_ID_proyecto_fkey" FOREIGN KEY ("ID_proyecto") REFERENCES "Proyecto"("ID_proyecto") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historial_documentos" ADD CONSTRAINT "Historial_documentos_ID_area_fkey" FOREIGN KEY ("ID_area") REFERENCES "Area"("ID_area") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historial_documentos" ADD CONSTRAINT "Historial_documentos_ID_documento_fkey" FOREIGN KEY ("ID_documento") REFERENCES "Documento"("ID_documento") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historial_documentos" ADD CONSTRAINT "Historial_documentos_ID_estado_documento_fkey" FOREIGN KEY ("ID_estado_documento") REFERENCES "Estado_documento"("ID_estado") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historial_documentos" ADD CONSTRAINT "Historial_documentos_ID_usuario_fkey" FOREIGN KEY ("ID_usuario") REFERENCES "Usuario"("ID_usuario") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detalle_historial" ADD CONSTRAINT "Detalle_historial_ID_area_fkey" FOREIGN KEY ("ID_area") REFERENCES "Area"("ID_area") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detalle_historial" ADD CONSTRAINT "Detalle_historial_ID_cliente_fkey" FOREIGN KEY ("ID_cliente") REFERENCES "Cliente"("ID_cliente") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detalle_historial" ADD CONSTRAINT "Detalle_historial_ID_historial_fkey" FOREIGN KEY ("ID_historial") REFERENCES "Historial_documentos"("ID_historial") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detalle_historial" ADD CONSTRAINT "Detalle_historial_ID_proyecto_fkey" FOREIGN KEY ("ID_proyecto") REFERENCES "Proyecto"("ID_proyecto") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detalle_historial" ADD CONSTRAINT "Detalle_historial_ID_usuario_fkey" FOREIGN KEY ("ID_usuario") REFERENCES "Usuario"("ID_usuario") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Permiso" ADD CONSTRAINT "Permiso_ID_area_fkey" FOREIGN KEY ("ID_area") REFERENCES "Area"("ID_area") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Permiso" ADD CONSTRAINT "Permiso_ID_proyecto_fkey" FOREIGN KEY ("ID_proyecto") REFERENCES "Proyecto"("ID_proyecto") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Permiso" ADD CONSTRAINT "Permiso_ID_usuario_fkey" FOREIGN KEY ("ID_usuario") REFERENCES "Usuario"("ID_usuario") ON DELETE SET NULL ON UPDATE CASCADE;
