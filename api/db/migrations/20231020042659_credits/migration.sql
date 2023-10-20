/*
  Warnings:

  - You are about to drop the column `description` on the `Acredition` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `body` on the `ProgramOfStudy` table. All the data in the column will be lost.
  - You are about to drop the column `expirationYear` on the `ProgramOfStudy` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `QualifiedRegistry` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Acredition" DROP COLUMN "description",
ADD COLUMN     "expirationDate" TIMESTAMP(3),
ADD COLUMN     "resolution" TEXT;

-- AlterTable
ALTER TABLE "Document" DROP COLUMN "description",
ADD COLUMN     "programUpdateId" INTEGER,
ADD COLUMN     "selfAssessmentId" INTEGER;

-- AlterTable
ALTER TABLE "ProgramOfStudy" DROP COLUMN "body",
DROP COLUMN "expirationYear",
ADD COLUMN     "coursesNumber" INTEGER,
ADD COLUMN     "credits" INTEGER,
ADD COLUMN     "sniesCode" TEXT;

-- AlterTable
ALTER TABLE "QualifiedRegistry" DROP COLUMN "description",
ADD COLUMN     "expirationDate" TIMESTAMP(3),
ADD COLUMN     "resolution" TEXT;

-- CreateTable
CREATE TABLE "SelfAssessment" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolution" TEXT,
    "programId" INTEGER,
    "expirationDate" TIMESTAMP(3),

    CONSTRAINT "SelfAssessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProgramUpdate" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolution" TEXT,
    "programId" INTEGER,
    "expirationDate" TIMESTAMP(3),

    CONSTRAINT "ProgramUpdate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SelfAssessment" ADD CONSTRAINT "SelfAssessment_programId_fkey" FOREIGN KEY ("programId") REFERENCES "ProgramOfStudy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramUpdate" ADD CONSTRAINT "ProgramUpdate_programId_fkey" FOREIGN KEY ("programId") REFERENCES "ProgramOfStudy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_selfAssessmentId_fkey" FOREIGN KEY ("selfAssessmentId") REFERENCES "SelfAssessment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_programUpdateId_fkey" FOREIGN KEY ("programUpdateId") REFERENCES "ProgramUpdate"("id") ON DELETE SET NULL ON UPDATE CASCADE;
