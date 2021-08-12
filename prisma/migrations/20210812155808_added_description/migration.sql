/*
  Warnings:

  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Profile";

-- CreateTable
CREATE TABLE "Appointment" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "appointmentDate" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);
