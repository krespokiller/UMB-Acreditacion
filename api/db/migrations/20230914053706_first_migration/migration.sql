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

-- CreateIndex
CREATE UNIQUE INDEX "ProgramOfStudy_headQuarterId_key" ON "ProgramOfStudy"("headQuarterId");

-- AddForeignKey
ALTER TABLE "ProgramOfStudy" ADD CONSTRAINT "ProgramOfStudy_headQuarterId_fkey" FOREIGN KEY ("headQuarterId") REFERENCES "HeadQuarter"("id") ON DELETE SET NULL ON UPDATE CASCADE;
