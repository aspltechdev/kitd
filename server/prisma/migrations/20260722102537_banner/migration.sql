/*
  Warnings:

  - You are about to drop the column `image` on the `Banner` table. All the data in the column will be lost.
  - Added the required column `mediaUrl` to the `Banner` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."BannerMediaType" AS ENUM ('IMAGE', 'VIDEO');

-- AlterTable
ALTER TABLE "public"."Banner" DROP COLUMN "image",
ADD COLUMN     "buttonLink" TEXT,
ADD COLUMN     "buttonText" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "displayOrder" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "mediaType" "public"."BannerMediaType" NOT NULL DEFAULT 'IMAGE',
ADD COLUMN     "mediaUrl" TEXT NOT NULL;
