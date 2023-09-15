-- CreateEnum
CREATE TYPE "roleType" AS ENUM ('ADMIN', 'CLIENT');

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

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "roleType" NOT NULL DEFAULT 'CLIENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProgramOfStudyToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ProgramOfStudy_headQuarterId_key" ON "ProgramOfStudy"("headQuarterId");

-- CreateIndex
CREATE UNIQUE INDEX "Acredition_programId_key" ON "Acredition"("programId");

-- CreateIndex
CREATE UNIQUE INDEX "Document_acreditionId_key" ON "Document"("acreditionId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_ProgramOfStudyToUser_AB_unique" ON "_ProgramOfStudyToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ProgramOfStudyToUser_B_index" ON "_ProgramOfStudyToUser"("B");

-- AddForeignKey
ALTER TABLE "ProgramOfStudy" ADD CONSTRAINT "ProgramOfStudy_headQuarterId_fkey" FOREIGN KEY ("headQuarterId") REFERENCES "HeadQuarter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Acredition" ADD CONSTRAINT "Acredition_programId_fkey" FOREIGN KEY ("programId") REFERENCES "ProgramOfStudy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_acreditionId_fkey" FOREIGN KEY ("acreditionId") REFERENCES "Acredition"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProgramOfStudyToUser" ADD CONSTRAINT "_ProgramOfStudyToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "ProgramOfStudy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProgramOfStudyToUser" ADD CONSTRAINT "_ProgramOfStudyToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
