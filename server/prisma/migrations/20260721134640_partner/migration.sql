-- CreateEnum
CREATE TYPE "public"."PartnerType" AS ENUM ('ACADEMIC_PARTNER', 'TECHNOLOGY_PARTNER', 'MEDIA_PARTNER', 'EVENT_PARTNER', 'SPONSOR');

-- CreateTable
CREATE TABLE "public"."Partner" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "public"."PartnerType" NOT NULL,
    "logo" TEXT NOT NULL,
    "website" TEXT,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Partner_pkey" PRIMARY KEY ("id")
);
