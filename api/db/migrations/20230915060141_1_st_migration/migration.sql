-- CreateEnum
CREATE TYPE "programType" AS ENUM ('PREGRADO', 'POSGRADO');

-- CreateEnum
CREATE TYPE "carrerType" AS ENUM ('TECNICO', 'TECNOLOGO', 'PROFESIONAL', 'ESPECIALIZACION_TECNICA', 'ESPECIALIZACION_TECNOLOGICA', 'ESPECIALIZACION_UNIVERSITARIA', 'MAESTRIA', 'DOCTORADO');

-- CreateTable
CREATE TABLE "ProgramOfStudy" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "programType" "programType" NOT NULL,
    "carrerType" "carrerType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "headQuarterId" INTEGER,

    CONSTRAINT "ProgramOfStudy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HeadQuarter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HeadQuarter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Acredition" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "programId" INTEGER,

    CONSTRAINT "Acredition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "acreditionId" INTEGER,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProgramOfStudy_headQuarterId_key" ON "ProgramOfStudy"("headQuarterId");

-- CreateIndex
CREATE UNIQUE INDEX "Acredition_programId_key" ON "Acredition"("programId");

-- CreateIndex
CREATE UNIQUE INDEX "Document_acreditionId_key" ON "Document"("acreditionId");

-- AddForeignKey
ALTER TABLE "ProgramOfStudy" ADD CONSTRAINT "ProgramOfStudy_headQuarterId_fkey" FOREIGN KEY ("headQuarterId") REFERENCES "HeadQuarter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Acredition" ADD CONSTRAINT "Acredition_programId_fkey" FOREIGN KEY ("programId") REFERENCES "ProgramOfStudy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_acreditionId_fkey" FOREIGN KEY ("acreditionId") REFERENCES "Acredition"("id") ON DELETE SET NULL ON UPDATE CASCADE;
