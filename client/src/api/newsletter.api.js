import api from "./axios";

// Get All Subscribers
export const getAllSubscribers = (params) =>
  api.get("/newsletter", { params });

// Get Subscriber By ID
export const getSubscriberById = (id) =>
  api.get(`/newsletter/${id}`);

// Create Subscriber
export const createSubscriber = (data) =>
  api.post("/newsletter", data);

// Update Subscriber
export const updateSubscriber = (id, data) =>
  api.put(`/newsletter/${id}`, data);

// Delete Subscriber
export const deleteSubscriber = (id) =>
  api.delete(`/newsletter/${id}`);

// Toggle Status
export const toggleSubscriberStatus = (id) =>
  api.patch(`/newsletter/${id}/status`);