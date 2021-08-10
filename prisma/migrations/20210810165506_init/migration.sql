-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "appointmentDate" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);
