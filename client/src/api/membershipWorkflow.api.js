import api from "./axios";

// Start Review
export const startMembershipReview = (id) =>
  api.patch(`/membership-enquiries/${id}/start-review`);

// Send Registration Form
export const sendMembershipRegistration = (id) =>
  api.patch(`/membership-enquiries/${id}/send-registration`);

// Request Changes
export const requestMembershipChanges = (id, data) =>
  api.patch(`/membership-enquiries/${id}/request-changes`, data);

// Approve Member
export const approveMembershipMember = (id) =>
  api.patch(`/membership-enquiries/${id}/approve-member`);