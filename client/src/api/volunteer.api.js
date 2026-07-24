// src/api/volunteer.api.js

import api from "./axios";

// Get All Volunteer Registrations
export const getAllVolunteers = (params) =>
  api.get("/volunteer-registrations", { params });

// Get Volunteer Registration By ID
export const getVolunteerById = (id) =>
  api.get(`/volunteer-registrations/${id}`);

// Submit Volunteer Registration (Public Website)
export const createVolunteer = (data) =>
  api.post("/volunteer-registrations", data);

// Update Volunteer Status
export const updateVolunteerStatus = (id, data) =>
  api.patch(`/volunteer-registrations/${id}/status`, data);

// Delete Volunteer Registration
export const deleteVolunteer = (id) =>
  api.delete(`/volunteer-registrations/${id}`);