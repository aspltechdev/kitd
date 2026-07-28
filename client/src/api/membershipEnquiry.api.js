// src/api/membershipEnquiry.api.js

import api from "./axios";

// Get All Membership Enquiries
export const getAllMembershipEnquiries = (params) =>
  api.get("/membership-enquiries", { params });

// Get Membership Enquiry By ID
export const getMembershipEnquiryById = (id) =>
  api.get(`/membership-enquiries/${id}`);

// Create Membership Enquiry (Public Website)
export const createMembershipEnquiry = (formData) =>
  api.post("/membership-enquiries", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Update Status
export const updateMembershipEnquiryStatus = (id, data) =>
  api.patch(`/membership-enquiries/${id}/status`, data);

// Approve Membership Enquiry
export const approveMembershipEnquiry = (id) =>
  api.post(`/membership-enquiries/${id}/approve`);

// Delete Membership Enquiry
export const deleteMembershipEnquiry = (id) =>
  api.delete(`/membership-enquiries/${id}`);


export const validateRegistrationToken = (token) => {
  return api.get(`/membership-enquiries/token/${token}`);
};

// Submit Registration
export const registerMember = (token, formData) => {
  return api.post(
    `/membership-enquiries/register/${token}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};


export const startMembershipReview = (id) =>
  api.patch(`/membership-enquiries/${id}/start-review`);

export const sendMembershipRegistration = (id) =>
  api.patch(`/membership-enquiries/${id}/send-registration`);

export const requestMembershipChanges = (id, data) =>
  api.patch(`/membership-enquiries/${id}/request-changes`, data);

export const approveMembershipMember = (id) =>
  api.patch(`/membership-enquiries/${id}/approve-member`);