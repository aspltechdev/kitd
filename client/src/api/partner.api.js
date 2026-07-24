import api from "./axios";

// Get All Partners
export const getAllPartners = (params) =>
  api.get("/partners", { params });

// Get Partner By ID
export const getPartnerById = (id) =>
  api.get(`/partners/${id}`);

// Create Partner
export const createPartner = (formData) =>
  api.post("/partners", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Update Partner
export const updatePartner = (id, formData) =>
  api.put(`/partners/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Delete Partner
export const deletePartner = (id) =>
  api.delete(`/partners/${id}`);

// Toggle Status
export const togglePartnerStatus = (id) =>
  api.patch(`/partners/${id}/status`);