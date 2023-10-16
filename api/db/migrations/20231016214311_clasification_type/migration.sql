/*
  Warnings:

  - The `classification` column on the `ProgramOfStudy` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "clasificationType" AS ENUM ('ACREDITADO', 'ENESPERA', 'PROYECTADO');

-- AlterTable
ALTER TABLE "ProgramOfStudy" DROP COLUMN "classification",
ADD COLUMN     "classification" "clasificationType";
