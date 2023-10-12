-- CreateEnum
CREATE TYPE "roleType" AS ENUM ('admin', 'client');

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
    "programType" "programType" NOT NULL DEFAULT 'PREGRADO',
    "carrerType" "carrerType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "headQuarterId" INTEGER,
    "classification" TEXT,
    "expirationYear" INTEGER,
    "docenciaServicio" BOOLEAN,
    "reaccreditationStatus" TEXT,
    "academicGroupId" INTEGER,

    CONSTRAINT "ProgramOfStudy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Faculty" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Faculty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AcademicGroup" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "facultyId" INTEGER,

    CONSTRAINT "AcademicGroup_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "QualifiedRegistry" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "programId" INTEGER,

    CONSTRAINT "QualifiedRegistry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "acreditionId" INTEGER,
    "qualifiedRegistryId" INTEGER,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "roles" "roleType" NOT NULL DEFAULT 'client',
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProgramOfStudy_headQuarterId_key" ON "ProgramOfStudy"("headQuarterId");

-- CreateIndex
CREATE UNIQUE INDEX "ProgramOfStudy_academicGroupId_key" ON "ProgramOfStudy"("academicGroupId");

-- CreateIndex
CREATE UNIQUE INDEX "AcademicGroup_facultyId_key" ON "AcademicGroup"("facultyId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "ProgramOfStudy" ADD CONSTRAINT "ProgramOfStudy_headQuarterId_fkey" FOREIGN KEY ("headQuarterId") REFERENCES "HeadQuarter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramOfStudy" ADD CONSTRAINT "ProgramOfStudy_academicGroupId_fkey" FOREIGN KEY ("academicGroupId") REFERENCES "AcademicGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcademicGroup" ADD CONSTRAINT "AcademicGroup_facultyId_fkey" FOREIGN KEY ("facultyId") REFERENCES "Faculty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Acredition" ADD CONSTRAINT "Acredition_programId_fkey" FOREIGN KEY ("programId") REFERENCES "ProgramOfStudy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QualifiedRegistry" ADD CONSTRAINT "QualifiedRegistry_programId_fkey" FOREIGN KEY ("programId") REFERENCES "ProgramOfStudy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_acreditionId_fkey" FOREIGN KEY ("acreditionId") REFERENCES "Acredition"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_qualifiedRegistryId_fkey" FOREIGN KEY ("qualifiedRegistryId") REFERENCES "QualifiedRegistry"("id") ON DELETE SET NULL ON UPDATE CASCADE;
