-- AlterTable
ALTER TABLE "public"."Activity" ADD COLUMN     "date" TIMESTAMP(3),
ADD COLUMN     "displayOrder" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "shortDescription" TEXT;

-- CreateTable
CREATE TABLE "public"."VolunteerRegistration" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "occupation" TEXT,
    "organization" TEXT,
    "interests" TEXT,
    "experience" TEXT,
    "availability" TEXT,
    "message" TEXT,
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VolunteerRegistration_pkey" PRIMARY KEY ("id")
);
