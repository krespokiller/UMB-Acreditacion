/*
  Warnings:

  - You are about to drop the column `reaccreditationStatus` on the `ProgramOfStudy` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProgramOfStudy" DROP COLUMN "reaccreditationStatus",
ADD COLUMN     "admissionPeriod" INTEGER,
ADD COLUMN     "duration" INTEGER,
ADD COLUMN     "spaceAvailable" INTEGER;
