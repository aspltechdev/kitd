import api from "./axios";

// Get All Events
export const getAllEvents = (params) =>
  api.get("/events", { params });

// Get Event By ID
export const getEventById = (id) =>
  api.get(`/events/${id}`);

// Create Event
export const createEvent = (formData) =>
  api.post("/events", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Update Event
export const updateEvent = (id, formData) =>
  api.put(`/events/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Delete Event
export const deleteEvent = (id) =>
  api.delete(`/events/${id}`);

// Toggle Event Status
export const toggleEventStatus = (id) =>
  api.patch(`/events/${id}/status`);