// import api from "./axios";

// /**
//  * Get All Team Members
//  */
// export const getAllTeams = (params) => {
//   return api.get("/teams", { params });
// };

// /**
//  * Get Team Member By ID
//  */
// export const getTeamById = (id) => {
//   return api.get(`/teams/${id}`);
// };

// /**
//  * Create Team Member
//  */
// export const createTeam = (formData) => {
//   return api.post("/teams", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
// };

// /**
//  * Update Team Member
//  */
// export const updateTeam = (id, formData) => {
//   return api.put(`/teams/${id}`, formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
// };

// /**
//  * Delete Team Member
//  */
// export const deleteTeam = (id) => {
//   return api.delete(`/teams/${id}`);
// };

// /**
//  * Toggle Team Member Status
//  */
// export const toggleTeamStatus = (id) => {
//   return api.patch(`/teams/${id}/status`);
// };


import api from "./axios";

/**
 * Get All Team Members
 */
export const getAllTeams = (params) => {
  return api.get("/teams", { params });
};

/**
 * Get Public Team Members (Website)
 */
export const getPublicTeam = () => {
  return api.get("/teams/public");
};

/**
 * Get Team Member By ID
 */
export const getTeamById = (id) => {
  return api.get(`/teams/${id}`);
};

/**
 * Create Team Member
 */
export const createTeam = (formData) => {
  return api.post("/teams", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/**
 * Update Team Member
 */
export const updateTeam = (id, formData) => {
  return api.put(`/teams/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/**
 * Toggle Team Member Visibility (Public/Hidden)
 */
export const toggleTeamVisibility = (id) => {
  return api.patch(`/teams/${id}/toggle-visibility`);
};

/**
 * Toggle Team Member Status (Active/Inactive)
 */
export const toggleTeamStatus = (id) => {
  return api.patch(`/teams/${id}/status`);
};

/**
 * Delete Team Member
 */
export const deleteTeam = (id) => {
  return api.delete(`/teams/${id}`);
};