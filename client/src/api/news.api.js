// src/api/news.api.js

import api from "./axios";

// Get All News
export const getAllNews = (params) =>
  api.get("/news", { params });

// Get News By ID
export const getNewsById = (id) =>
  api.get(`/news/${id}`);

// Create News
export const createNews = (formData) =>
  api.post("/news", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Update News
export const updateNews = (id, formData) =>
  api.put(`/news/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Delete News
export const deleteNews = (id) =>
  api.delete(`/news/${id}`);

// Toggle Active Status
export const toggleNewsStatus = (id) =>
  api.patch(`/news/${id}/status`);

// Toggle Featured Status
export const toggleNewsFeatured = (id) =>
  api.patch(`/news/${id}/featured`);