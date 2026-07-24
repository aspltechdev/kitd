import api from "./axios";

/**
 * Get All Activities
 */
export const getAllActivities = (params) => {
  return api.get("/activities", { params });
};

/**
 * Get Activity By ID
 */
export const getActivityById = (id) => {
  return api.get(`/activities/${id}`);
};

/**
 * Create Activity
 */
export const createActivity = (formData) => {
  return api.post("/activities", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/**
 * Update Activity
 */
export const updateActivity = (id, formData) => {
  return api.put(`/activities/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/**
 * Delete Activity
 */
export const deleteActivity = (id) => {
  return api.delete(`/activities/${id}`);
};

/**
 * Toggle Activity Status
 */
export const toggleActivityStatus = (id) => {
  return api.patch(`/activities/${id}/status`);
};