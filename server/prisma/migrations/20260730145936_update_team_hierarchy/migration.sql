-- AlterTable
ALTER TABLE "public"."Team" ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "danceForm" TEXT,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "isPublic" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "level" TEXT NOT NULL DEFAULT 'MEMBER',
ADD COLUMN     "mobile" TEXT,
ADD COLUMN     "socialLinks" JSONB,
ADD COLUMN     "sortOrder" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "stageName" TEXT;
