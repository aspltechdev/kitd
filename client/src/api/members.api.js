import api from "./axios";

// Get All Members
export const getAllMembers = (params) =>
  api.get("/members", { params });

// Get Single Member
export const getMemberById = (id) =>
  api.get(`/members/${id}`);

// Create Member
export const createMember = (formData) =>
  api.post("/members", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Update Member
export const updateMember = (id, formData) =>
  api.put(`/members/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Delete Member
export const deleteMember = (id) =>
  api.delete(`/members/${id}`);

// Toggle Status
export const toggleMemberStatus = (id) =>
  api.patch(`/members/${id}/status`);