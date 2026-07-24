-- CreateTable
CREATE TABLE "public"."MembershipEnquiry" (
    "id" SERIAL NOT NULL,
    "photo" TEXT,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "gender" TEXT,
    "dateOfBirth" TIMESTAMP(3),
    "occupation" TEXT,
    "membershipType" TEXT,
    "danceStyle" TEXT,
    "experience" TEXT,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "message" TEXT,
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MembershipEnquiry_pkey" PRIMARY KEY ("id")
);
