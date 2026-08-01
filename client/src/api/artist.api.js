// import api from "./axios";

// // Get All Artists
// export const getAllArtists = (params) =>
//   api.get("/artists", { params });

// // Get Artist By ID
// export const getArtistById = (id) =>
//   api.get(`/artists/${id}`);

// // Create Artist
// export const createArtist = (formData) =>
//   api.post("/artists", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });

// // Update Artist
// export const updateArtist = (id, formData) =>
//   api.put(`/artists/${id}`, formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });

// // Delete Artist
// export const deleteArtist = (id) =>
//   api.delete(`/artists/${id}`);

// // Toggle Status
// export const toggleArtistStatus = (id) =>
//   api.patch(`/artists/${id}/status`);



import api from "./axios";

// Get All Artists
export const getAllArtists = (params) =>
  api.get("/artists", { params });

// Get Public Artists (Website - only isPublic: true)
export const getPublicArtists = () =>
  api.get("/artists/public");

// Get Artist By ID
export const getArtistById = (id) =>
  api.get(`/artists/${id}`);

// Create Artist
export const createArtist = (formData) =>
  api.post("/artists", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Update Artist
export const updateArtist = (id, formData) =>
  api.put(`/artists/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Toggle Visibility (Public/Hidden)
export const toggleArtistVisibility = (id) =>
  api.patch(`/artists/${id}/toggle-visibility`);

// Toggle Status (Active/Inactive)
export const toggleArtistStatus = (id) =>
  api.patch(`/artists/${id}/status`);

// Delete Artist
export const deleteArtist = (id) =>
  api.delete(`/artists/${id}`);