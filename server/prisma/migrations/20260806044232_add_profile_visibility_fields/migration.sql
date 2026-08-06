/*
  Warnings:

  - A unique constraint covering the columns `[profileToken]` on the table `MembershipEnquiry` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."MembershipEnquiry" ADD COLUMN     "isPublic" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "profileCompleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "profileCompletedAt" TIMESTAMP(3),
ADD COLUMN     "profileToken" TEXT,
ADD COLUMN     "profileTokenExpiry" TIMESTAMP(3),
ADD COLUMN     "profileVisibilitySent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "profileVisibilitySentAt" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "MembershipEnquiry_profileToken_key" ON "public"."MembershipEnquiry"("profileToken");
