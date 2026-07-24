import api from "./axios";

/**
 * Get All Gallery Items
 */
export const getAllGallery = (params) => {
  return api.get("/gallery", { params });
};

/**
 * Get Gallery Item By ID
 */
export const getGalleryById = (id) => {
  return api.get(`/gallery/${id}`);
};

/**
 * Create Gallery Item
 */
export const createGallery = (formData) => {
  return api.post("/gallery", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/**
 * Update Gallery Item
 */
export const updateGallery = (id, formData) => {
  return api.put(`/gallery/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/**
 * Delete Gallery Item
 */
export const deleteGallery = (id) => {
  return api.delete(`/gallery/${id}`);
};

/**
 * Toggle Gallery Status
 */
export const toggleGalleryStatus = (id) => {
  return api.patch(`/gallery/${id}/status`);
};