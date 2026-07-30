/*
  Warnings:

  - You are about to drop the column `facebookUrl` on the `MembershipEnquiry` table. All the data in the column will be lost.
  - You are about to drop the column `instagramUrl` on the `MembershipEnquiry` table. All the data in the column will be lost.
  - You are about to drop the column `twitterUrl` on the `MembershipEnquiry` table. All the data in the column will be lost.
  - You are about to drop the column `websiteUrl` on the `MembershipEnquiry` table. All the data in the column will be lost.
  - You are about to drop the column `youtubeUrl` on the `MembershipEnquiry` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `MembershipEnquiry` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."MemberRegistration" ADD COLUMN     "biography" TEXT,
ADD COLUMN     "postalCode" TEXT,
ADD COLUMN     "socialLinks" JSONB,
ADD COLUMN     "stageName" TEXT,
ALTER COLUMN "status" SET DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "public"."MembershipEnquiry" DROP COLUMN "facebookUrl",
DROP COLUMN "instagramUrl",
DROP COLUMN "twitterUrl",
DROP COLUMN "websiteUrl",
DROP COLUMN "youtubeUrl",
ADD COLUMN     "socialLinks" JSONB;

-- CreateIndex
CREATE UNIQUE INDEX "MembershipEnquiry_email_key" ON "public"."MembershipEnquiry"("email");
