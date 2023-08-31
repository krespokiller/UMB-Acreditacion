/*
  Warnings:

  - A unique constraint covering the columns `[headQuarterId]` on the table `ProgramOfStudy` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ProgramOfStudy" ADD COLUMN     "headQuarterId" INTEGER;

-- CreateTable
CREATE TABLE "HeadQuarter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "programOfStudyId" INTEGER,

    CONSTRAINT "HeadQuarter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HeadQuarter_programOfStudyId_key" ON "HeadQuarter"("programOfStudyId");

-- CreateIndex
CREATE UNIQUE INDEX "ProgramOfStudy_headQuarterId_key" ON "ProgramOfStudy"("headQuarterId");

-- AddForeignKey
ALTER TABLE "HeadQuarter" ADD CONSTRAINT "HeadQuarter_programOfStudyId_fkey" FOREIGN KEY ("programOfStudyId") REFERENCES "ProgramOfStudy"("id") ON DELETE SET NULL ON UPDATE CASCADE;
