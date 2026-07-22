import api from "./axios";

// Get All Banners
export const getAllBanners = (params) => {
  return api.get("/banners", { params });
};

// Get Banner By ID
export const getBannerById = (id) => {
  return api.get(`/banners/${id}`);
};

// Create Banner
export const createBanner = (formData) => {
  return api.post("/banners", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Update Banner
export const updateBanner = (id, formData) => {
  return api.put(`/banners/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Delete Banner
export const deleteBanner = (id) => {
  return api.delete(`/banners/${id}`);
};

// Toggle Status
export const toggleBannerStatus = (id) => {
  return api.patch(`/banners/${id}/status`);
};