/*
  Warnings:

  - You are about to drop the column `programId` on the `Document` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_programId_fkey";

-- DropIndex
DROP INDEX "Acredition_programId_key";

-- DropIndex
DROP INDEX "Document_programId_key";

-- AlterTable
ALTER TABLE "Document" DROP COLUMN "programId",
ADD COLUMN     "acreditionId" INTEGER,
ADD COLUMN     "qualifiedRegistryId" INTEGER;

-- CreateTable
CREATE TABLE "QualifiedRegistry" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "programId" INTEGER,

    CONSTRAINT "QualifiedRegistry_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "QualifiedRegistry" ADD CONSTRAINT "QualifiedRegistry_programId_fkey" FOREIGN KEY ("programId") REFERENCES "ProgramOfStudy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_acreditionId_fkey" FOREIGN KEY ("acreditionId") REFERENCES "Acredition"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_qualifiedRegistryId_fkey" FOREIGN KEY ("qualifiedRegistryId") REFERENCES "QualifiedRegistry"("id") ON DELETE SET NULL ON UPDATE CASCADE;
