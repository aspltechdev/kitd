// // src/api/membershipEnquiry.api.js

// import api from "./axios";

// // Get All Membership Enquiries
// export const getAllMembershipEnquiries = (params) =>
//   api.get("/membership-enquiries", { params });

// // Get Membership Enquiry By ID
// export const getMembershipEnquiryById = (id) =>
//   api.get(`/membership-enquiries/${id}`);

// // Create Membership Enquiry (Public Website)
// export const createMembershipEnquiry = (formData) =>
//   api.post("/membership-enquiries", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });

// // Update Status
// export const updateMembershipEnquiryStatus = (id, data) =>
//   api.patch(`/membership-enquiries/${id}/status`, data);

// // Approve Membership Enquiry
// export const approveMembershipEnquiry = (id) =>
//   api.post(`/membership-enquiries/${id}/approve`);

// // Delete Membership Enquiry
// export const deleteMembershipEnquiry = (id) =>
//   api.delete(`/membership-enquiries/${id}`);


// export const validateRegistrationToken = (token) => {
//   return api.get(`/membership-enquiries/token/${token}`);
// };

// // Submit Registration
// export const registerMember = (token, formData) => {
//   return api.post(
//     `/membership-enquiries/register/${token}`,
//     formData,
//     {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     }
//   );
// };


// export const startMembershipReview = (id) =>
//   api.patch(`/membership-enquiries/${id}/start-review`);

// export const sendMembershipRegistration = (id) =>
//   api.patch(`/membership-enquiries/${id}/send-registration`);

// export const requestMembershipChanges = (id, data) =>
//   api.patch(`/membership-enquiries/${id}/request-changes`, data);

// export const approveMembershipMember = (id) =>
//   api.patch(`/membership-enquiries/${id}/approve-member`);

// src/api/membershipEnquiry.api.js

import api from "./axios";

// ============================================
// PUBLIC API CALLS (No Authentication)
// ============================================

// Create Membership Enquiry (Public Website)
export const createMembershipEnquiry = (formData) =>
  api.post("/membership-enquiries", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Validate SEPA Token (Check if SEPA link is valid)
export const validateSepaToken = (token) =>
  api.get(`/membership-enquiries/sepa-token/${token}`);

// Submit SEPA Consent (Member submits IBAN & bank details)
export const submitSepaConsent = (token, formData) =>
  api.post(`/membership-enquiries/sepa-consent/${token}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// ============================================
// ADMIN API CALLS (Add Auth Token)
// ============================================

// Get All Membership Enquiries
export const getAllMembershipEnquiries = (params) =>
  api.get("/membership-enquiries", { params });

// Get Membership Enquiry By ID
export const getMembershipEnquiryById = (id) =>
  api.get(`/membership-enquiries/${id}`);

// Update Membership Enquiry (Edit details)
export const updateMembershipEnquiry = (id, formData) =>
  api.put(`/membership-enquiries/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Manual Status Update (No email sent)
export const updateMembershipEnquiryStatus = (id, data) =>
  api.patch(`/membership-enquiries/${id}/status`, data);

// Delete Membership Enquiry
export const deleteMembershipEnquiry = (id) =>
  api.delete(`/membership-enquiries/${id}`);

// ============================================
// WORKFLOW ACTIONS (Each sends email)
// ============================================

// Step 1: Start Review → UNDER_REVIEW (Sends "Under Review" email)
export const startMembershipReview = (id) =>
  api.patch(`/membership-enquiries/${id}/start-review`);

// Step 2: Send SEPA Consent → SEPA_CONSENT_SENT (Sends SEPA mandate email)
export const sendSepaConsentForm = (id) =>
  api.patch(`/membership-enquiries/${id}/send-sepa-consent`);

// Step 4: Final Approve → APPROVED (Sends congratulations email with Member ID)
export const approveMembershipMember = (id) =>
  api.patch(`/membership-enquiries/${id}/approve`);

// Request Changes (Any stage - Sends "Changes Required" email)
export const requestMembershipChanges = (id, data) =>
  api.patch(`/membership-enquiries/${id}/request-changes`, data);