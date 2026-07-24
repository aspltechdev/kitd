import api from "./axios";

// Get All Contact Enquiries
export const getAllContacts = (params) =>
  api.get("/contacts", { params });

// Get Contact Details
export const getContactById = (id) =>
  api.get(`/contacts/${id}`);

// Update Enquiry Status
export const updateContactStatus = (id, data) =>
  api.patch(`/contacts/${id}/status`, data);

// Delete Enquiry
export const deleteContact = (id) =>
  api.delete(`/contacts/${id}`);