-- AlterTable
ALTER TABLE "public"."MembershipEnquiry" ADD COLUMN     "registrationToken" TEXT,
ADD COLUMN     "remarks" TEXT,
ADD COLUMN     "tokenExpiry" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "public"."MemberRegistration" (
    "id" SERIAL NOT NULL,
    "enquiryId" INTEGER NOT NULL,
    "fullName" TEXT NOT NULL,
    "gender" TEXT,
    "dateOfBirth" TIMESTAMP(3),
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "danceStyle" TEXT,
    "guru" TEXT,
    "experience" TEXT,
    "document" TEXT,
    "status" TEXT NOT NULL DEFAULT 'REGISTRATION_SUBMITTED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MemberRegistration_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."MemberRegistration" ADD CONSTRAINT "MemberRegistration_enquiryId_fkey" FOREIGN KEY ("enquiryId") REFERENCES "public"."MembershipEnquiry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
