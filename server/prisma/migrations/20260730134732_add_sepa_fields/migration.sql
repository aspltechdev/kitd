/*
  Warnings:

  - You are about to drop the column `registrationToken` on the `MembershipEnquiry` table. All the data in the column will be lost.
  - You are about to drop the column `tokenExpiry` on the `MembershipEnquiry` table. All the data in the column will be lost.
  - You are about to drop the `MemberRegistration` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[sepaToken]` on the table `MembershipEnquiry` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[memberId]` on the table `MembershipEnquiry` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "public"."MemberRegistration" DROP CONSTRAINT "MemberRegistration_enquiryId_fkey";

-- AlterTable
ALTER TABLE "public"."MembershipEnquiry" DROP COLUMN "registrationToken",
DROP COLUMN "tokenExpiry",
ADD COLUMN     "accountHolder" TEXT,
ADD COLUMN     "bankName" TEXT,
ADD COLUMN     "iban" TEXT,
ADD COLUMN     "memberId" TEXT,
ADD COLUMN     "sepaConsentFile" TEXT,
ADD COLUMN     "sepaConsentReceived" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "sepaConsentReceivedAt" TIMESTAMP(3),
ADD COLUMN     "sepaConsentSent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "sepaConsentSentAt" TIMESTAMP(3),
ADD COLUMN     "sepaToken" TEXT,
ADD COLUMN     "sepaTokenExpiry" TIMESTAMP(3);

-- DropTable
DROP TABLE "public"."MemberRegistration";

-- CreateIndex
CREATE UNIQUE INDEX "MembershipEnquiry_sepaToken_key" ON "public"."MembershipEnquiry"("sepaToken");

-- CreateIndex
CREATE UNIQUE INDEX "MembershipEnquiry_memberId_key" ON "public"."MembershipEnquiry"("memberId");
