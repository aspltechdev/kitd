/*
  Warnings:

  - You are about to drop the column `name` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `Membership` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Membership` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Membership` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[memberId]` on the table `Membership` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Membership` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fullName` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `Membership` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Membership` table without a default value. This is not possible if the table is not empty.
  - Added the required column `memberId` to the `Membership` table without a default value. This is not possible if the table is not empty.
  - Added the required column `membershipType` to the `Membership` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobile` to the `Membership` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Membership` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Contact" DROP COLUMN "name",
ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "enquiryType" TEXT,
ADD COLUMN     "fullName" TEXT NOT NULL,
ADD COLUMN     "state" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'NEW',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."Membership" DROP COLUMN "message",
DROP COLUMN "name",
DROP COLUMN "phone",
ADD COLUMN     "country" TEXT,
ADD COLUMN     "expiryDate" TIMESTAMP(3),
ADD COLUMN     "fullName" TEXT NOT NULL,
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "joinedDate" TIMESTAMP(3),
ADD COLUMN     "memberId" TEXT NOT NULL,
ADD COLUMN     "membershipType" TEXT NOT NULL,
ADD COLUMN     "mobile" TEXT NOT NULL,
ADD COLUMN     "state" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Membership_memberId_key" ON "public"."Membership"("memberId");

-- CreateIndex
CREATE UNIQUE INDEX "Membership_email_key" ON "public"."Membership"("email");
