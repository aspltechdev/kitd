import api from "./axios";

/**
 * Get All Team Members
 */
export const getAllTeams = (params) => {
  return api.get("/teams", { params });
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
 * Delete Team Member
 */
export const deleteTeam = (id) => {
  return api.delete(`/teams/${id}`);
};

/**
 * Toggle Team Member Status
 */
export const toggleTeamStatus = (id) => {
  return api.patch(`/teams/${id}/status`);
};