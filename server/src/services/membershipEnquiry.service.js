// import prisma from "../config/prisma.js";

// export const getAll = async () => {
//   return await prisma.membershipEnquiry.findMany({
//     orderBy: {
//       createdAt: "desc",
//     },
//   });
// };

// export const getById = async (id) => {
//   return await prisma.membershipEnquiry.findUnique({
//     where: {
//       id: Number(id),
//     },
//   });
// };

// export const create = async (data) => {
//   return await prisma.membershipEnquiry.create({
//     data: {
//       ...data,
//       status: "NEW",
//     },
//   });
// };

// export const updateStatus = async (id, status) => {
//   return await prisma.membershipEnquiry.update({
//     where: {
//       id: Number(id),
//     },
//     data: {
//       status,
//     },
//   });
// };

// export const approve = async (id) => {
//   const enquiry = await prisma.membershipEnquiry.findUnique({
//     where: {
//       id: Number(id),
//     },
//   });

//   if (!enquiry) {
//     throw new Error("Membership enquiry not found");
//   }

//   const member = await prisma.member.create({
//     data: {
//       photo: enquiry.photo,
//       fullName: enquiry.fullName,
//       email: enquiry.email,
//       mobile: enquiry.mobile,
//       gender: enquiry.gender,
//       membershipType: enquiry.membershipType,
//       city: enquiry.city,
//       state: enquiry.state,
//       country: enquiry.country,
//       joinedDate: new Date(),
//       isActive: true,
//     },
//   });

//   await prisma.membershipEnquiry.update({
//     where: {
//       id: Number(id),
//     },
//     data: {
//       status: "APPROVED",
//     },
//   });

//   return member;
// };

// export const remove = async (id) => {
//   return await prisma.membershipEnquiry.delete({
//     where: {
//       id: Number(id),
//     },
//   });
// };


// import prisma from "../config/prisma.js";

// // =======================
// // Get All
// // =======================
// export const getAll = async () => {
//   return prisma.membershipEnquiry.findMany({
//     orderBy: {
//       createdAt: "desc",
//     },
//   });
// };

// // =======================
// // Get By ID
// // =======================
// export const getById = async (id) => {
//   return prisma.membershipEnquiry.findUnique({
//     where: {
//       id: Number(id),
//     },
//   });
// };

// // =======================
// // Get By Registration Token
// // =======================
// export const getByToken = async (token) => {
//   return prisma.membershipEnquiry.findFirst({
//     where: {
//       registrationToken: token,
//     },
//   });
// };

// // =======================
// // Create Enquiry
// // =======================
// export const create = async (data) => {
//   return prisma.membershipEnquiry.create({
//     data: {
//       ...data,
//       status: "NEW",
//     },
//   });
// };

// // =======================
// // Update Status
// // =======================
// export const updateStatus = async (id, status) => {
//   return prisma.membershipEnquiry.update({
//     where: {
//       id: Number(id),
//     },
//     data: {
//       status,
//     },
//   });
// };

// // =======================
// // Start Review
// // =======================
// export const startReview = async (id) => {
//   return prisma.membershipEnquiry.update({
//     where: {
//       id: Number(id),
//     },
//     data: {
//       status: "UNDER_REVIEW",
//     },
//   });
// };

// // =======================
// // Send Registration Link
// // =======================
// export const sendRegistration = async (
//   id,
//   registrationToken,
//   tokenExpiry
// ) => {
//   return prisma.membershipEnquiry.update({
//     where: {
//       id: Number(id),
//     },
//     data: {
//       status: "REGISTRATION_PENDING",
//       registrationToken,
//       tokenExpiry,
//     },
//   });
// };

// // =======================
// // Registration Submitted
// // =======================
// export const registrationSubmitted = async (id) => {
//   return prisma.membershipEnquiry.update({
//     where: {
//       id: Number(id),
//     },
//     data: {
//       status: "REGISTRATION_SUBMITTED",
//     },
//   });
// };

// // =======================
// // Request Changes
// // =======================
// export const requestChanges = async (id, remarks) => {
//   return prisma.membershipEnquiry.update({
//     where: {
//       id: Number(id),
//     },
//     data: {
//       status: "CHANGES_REQUESTED",
//       remarks,
//     },
//   });
// };

// // =======================
// // Approve Member
// // =======================
// export const approve = async (id) => {
//   const enquiry = await prisma.membershipEnquiry.findUnique({
//     where: {
//       id: Number(id),
//     },
//   });

//   if (!enquiry) {
//     throw new Error("Membership enquiry not found");
//   }

//   // Generate Member ID
//   const year = new Date().getFullYear();
//   const memberId = `KITD-${year}-${String(enquiry.id).padStart(4, "0")}`;

//   // Create Membership
//   const membership = await prisma.membership.create({
//     data: {
//       memberId,
//       fullName: enquiry.fullName,
//       email: enquiry.email,
//       mobile: enquiry.mobile,
//       gender: enquiry.gender,
//       membershipType: enquiry.membershipType,
//       city: enquiry.city,
//       state: enquiry.state,
//       country: enquiry.country,
//       joinedDate: new Date(),
//       expiryDate: null,
//       isActive: true,
//     },
//   });

//   // Update enquiry
//   await prisma.membershipEnquiry.update({
//     where: {
//       id: Number(id),
//     },
//     data: {
//       status: "APPROVED",
//       registrationToken: null,
//       tokenExpiry: null,
//     },
//   });

//   return membership;
// };

// // =======================
// // Delete
// // =======================
// export const remove = async (id) => {
//   return prisma.membershipEnquiry.delete({
//     where: {
//       id: Number(id),
//     },
//   });
// };



import prisma from "../config/prisma.js";

// =======================
// Get All
// =======================
export const getAll = async () => {
  return prisma.membershipEnquiry.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

// =======================
// Get By ID
// =======================
export const getById = async (id) => {
  return prisma.membershipEnquiry.findUnique({
    where: {
      id: Number(id),
    },
  });
};

// =======================
// Get By SEPA Token
// =======================
export const getBySepaToken = async (token) => {
  return prisma.membershipEnquiry.findFirst({
    where: {
      sepaToken: token,
    },
  });
};

// =======================
// Create Enquiry
// =======================
export const create = async (data) => {
  return prisma.membershipEnquiry.create({
    data: {
      ...data,
      status: "NEW",
    },
  });
};

// =======================
// Update Enquiry
// =======================
export const update = async (id, data) => {
  return prisma.membershipEnquiry.update({
    where: {
      id: Number(id),
    },
    data: data,
  });
};

// =======================
// Update Status (Manual - No Email)
// =======================
export const updateStatus = async (id, status, remarks = null) => {
  return prisma.membershipEnquiry.update({
    where: {
      id: Number(id),
    },
    data: {
      status,
      remarks: remarks || undefined,
    },
  });
};

// =======================
// STEP 1: Start Review → UNDER_REVIEW
// =======================
export const startReview = async (id) => {
  return prisma.membershipEnquiry.update({
    where: {
      id: Number(id),
    },
    data: {
      status: "UNDER_REVIEW",
    },
  });
};

// =======================
// STEP 2: Send SEPA Consent → SEPA_CONSENT_SENT
// =======================
export const sendSepaConsent = async (id, sepaToken, sepaTokenExpiry) => {
  return prisma.membershipEnquiry.update({
    where: {
      id: Number(id),
    },
    data: {
      status: "SEPA_CONSENT_SENT",
      sepaToken,
      sepaTokenExpiry,
      sepaConsentSent: true,
      sepaConsentSentAt: new Date(),
    },
  });
};

// =======================
// STEP 3: SEPA Consent Received → SEPA_CONSENT_RECEIVED
// =======================
export const sepaConsentReceived = async (id, data) => {
  return prisma.membershipEnquiry.update({
    where: {
      id: Number(id),
    },
    data: {
      status: "SEPA_CONSENT_RECEIVED",
      sepaConsentReceived: true,
      sepaConsentReceivedAt: new Date(),
      sepaConsentFile: data.sepaConsentFile,
      iban: data.iban,
      accountHolder: data.accountHolder,
      bankName: data.bankName,
    },
  });
};

// =======================
// STEP 4: Approve Member → APPROVED
// =======================
export const approve = async (id, memberId) => {
  const enquiry = await prisma.membershipEnquiry.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!enquiry) {
    throw new Error("Membership enquiry not found");
  }

  // Update enquiry status to APPROVED
  const updatedEnquiry = await prisma.membershipEnquiry.update({
    where: {
      id: Number(id),
    },
    data: {
      status: "APPROVED",
      memberId: memberId,
      sepaToken: null,
      sepaTokenExpiry: null,
    },
  });

  return updatedEnquiry;
};

// =======================
// Request Changes → CHANGES_REQUESTED
// =======================
export const requestChanges = async (id, remarks) => {
  return prisma.membershipEnquiry.update({
    where: {
      id: Number(id),
    },
    data: {
      status: "CHANGES_REQUESTED",
      remarks,
    },
  });
};

// =======================
// Delete
// =======================
export const remove = async (id) => {
  return prisma.membershipEnquiry.delete({
    where: {
      id: Number(id),
    },
  });
};