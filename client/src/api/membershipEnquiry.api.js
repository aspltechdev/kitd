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