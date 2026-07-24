import api from "./axios";

// Get All Testimonials
export const getAllTestimonials = (params) =>
  api.get("/testimonials", { params });

// Get Testimonial By ID
export const getTestimonialById = (id) =>
  api.get(`/testimonials/${id}`);

// Create Testimonial
export const createTestimonial = (formData) =>
  api.post("/testimonials", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Update Testimonial
export const updateTestimonial = (id, formData) =>
  api.put(`/testimonials/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Delete Testimonial
export const deleteTestimonial = (id) =>
  api.delete(`/testimonials/${id}`);

// Toggle Status
export const toggleTestimonialStatus = (id) =>
  api.patch(`/testimonials/${id}/status`);