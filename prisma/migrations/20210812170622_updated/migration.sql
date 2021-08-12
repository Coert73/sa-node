/*
  Warnings:

  - You are about to drop the column `description` on the `Appointment` table. All the data in the column will be lost.
  - Added the required column `cellphone` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `petName` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `petType` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vistReason` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "description",
ADD COLUMN     "cellphone" INTEGER NOT NULL,
ADD COLUMN     "petName" TEXT NOT NULL,
ADD COLUMN     "petType" TEXT NOT NULL,
ADD COLUMN     "vistReason" TEXT NOT NULL;
