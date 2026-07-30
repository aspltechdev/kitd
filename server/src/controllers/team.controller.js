// import * as teamService from "../services/team.service.js";

// export const getAll = async (req, res) => {
//   try {
//     const teams = await teamService.getAll();

//     res.status(200).json({
//       success: true,
//       data: teams,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// export const getById = async (req, res) => {
//   try {
//     const team = await teamService.getById(req.params.id);

//     if (!team) {
//       return res.status(404).json({
//         success: false,
//         message: "Team member not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: team,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // export const create = async (req, res) => {
// //   try {
// //     const team = await teamService.create(req.body);

// //     res.status(201).json({
// //       success: true,
// //       message: "Team member created successfully",
// //       data: team,
// //     });
// //   } catch (error) {
// //     res.status(500).json({
// //       success: false,
// //       message: error.message,
// //     });
// //   }
// // };

// export const create = async (req, res) => {
//   try {
//     console.log("BODY:", req.body);
//     console.log("FILE:", req.file);

//     const data = {
//       name: req.body.name,
//       designation: req.body.designation,
//       biography: req.body.biography,
//       image: req.file?.filename,
//     };

//     const team = await teamService.create(data);

//     res.status(201).json({
//       success: true,
//       message: "Team member created successfully",
//       data: team,
//     });
//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };


// export const update = async (req, res) => {
//   try {
//     const team = await teamService.update(req.params.id, req.body);

//     res.status(200).json({
//       success: true,
//       message: "Team member updated successfully",
//       data: team,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// export const remove = async (req, res) => {
//   try {
//     await teamService.remove(req.params.id);

//     res.status(200).json({
//       success: true,
//       message: "Team member deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

import * as teamService from "../services/team.service.js";

// ============================================
// GET ALL (Admin)
// ============================================
export const getAll = async (req, res) => {
  try {
    const teams = await teamService.getAll();
    res.status(200).json({ success: true, data: teams });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ============================================
// GET PUBLIC (Website - Hierarchical)
// ============================================
export const getPublic = async (req, res) => {
  try {
    const data = await teamService.getPublic();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ============================================
// GET BY ID
// ============================================
export const getById = async (req, res) => {
  try {
    const team = await teamService.getById(req.params.id);
    if (!team) {
      return res.status(404).json({ success: false, message: "Team member not found" });
    }
    res.status(200).json({ success: true, data: team });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ============================================
// CREATE
// ============================================
export const create = async (req, res) => {
  try {
    const data = {
      name: req.body.name || req.body.fullName,
      designation: req.body.designation || "Member",
      biography: req.body.biography || null,
      image: req.file?.filename || req.body.image || "",
      email: req.body.email || null,
      level: req.body.level || "MEMBER",
      sortOrder: parseInt(req.body.sortOrder) || 0,
      isPublic: req.body.isPublic === true || req.body.isPublic === "true" || false,
      stageName: req.body.stageName || null,
      mobile: req.body.mobile || null,
      danceForm: req.body.danceForm || req.body.danceStyle || null,
      city: req.body.city || null,
      country: req.body.country || null,
      socialLinks: req.body.socialLinks || null,
    };

    const team = await teamService.create(data);
    res.status(201).json({ success: true, message: "Team member created", data: team });
  } catch (error) {
    console.error("Create Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// ============================================
// UPDATE
// ============================================
export const update = async (req, res) => {
  try {
    const data = {};

    if (req.body.name || req.body.fullName) data.name = req.body.name || req.body.fullName;
    if (req.body.designation !== undefined) data.designation = req.body.designation;
    if (req.body.biography !== undefined) data.biography = req.body.biography;
    if (req.body.email !== undefined) data.email = req.body.email;
    if (req.body.level !== undefined) data.level = req.body.level;
    if (req.body.sortOrder !== undefined) data.sortOrder = parseInt(req.body.sortOrder);
    if (req.body.isPublic !== undefined) data.isPublic = req.body.isPublic === true || req.body.isPublic === "true";
    if (req.body.stageName !== undefined) data.stageName = req.body.stageName;
    if (req.body.mobile !== undefined) data.mobile = req.body.mobile;
    if (req.body.danceForm || req.body.danceStyle) data.danceForm = req.body.danceForm || req.body.danceStyle;
    if (req.body.city !== undefined) data.city = req.body.city;
    if (req.body.country !== undefined) data.country = req.body.country;
    if (req.body.socialLinks !== undefined) data.socialLinks = req.body.socialLinks;

    if (req.file) data.image = req.file.filename;

    const team = await teamService.update(req.params.id, data);
    res.status(200).json({ success: true, message: "Team member updated", data: team });
  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// ============================================
// TOGGLE VISIBILITY
// ============================================
export const toggleVisibility = async (req, res) => {
  try {
    const member = await teamService.toggleVisibility(req.params.id);
    res.status(200).json({
      success: true,
      message: `Team member is now ${member.isPublic ? '👁️ Visible' : '🙈 Hidden'} on website`,
      data: member,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ============================================
// DELETE
// ============================================
export const remove = async (req, res) => {
  try {
    await teamService.remove(req.params.id);
    res.status(200).json({ success: true, message: "Team member deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};