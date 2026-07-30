-- AlterTable
ALTER TABLE "public"."Artist" ADD COLUMN     "country" TEXT,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "experience" TEXT,
ADD COLUMN     "isPublic" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "mobile" TEXT,
ADD COLUMN     "socialLinks" JSONB,
ADD COLUMN     "stageName" TEXT,
ADD COLUMN     "state" TEXT,
ALTER COLUMN "danceForm" DROP NOT NULL,
ALTER COLUMN "city" DROP NOT NULL,
ALTER COLUMN "image" DROP NOT NULL;
