// import * as artistService from "../services/artist.service.js";

// export const getAll = async (req, res) => {
//   try {
//     const artists = await artistService.getAll();

//     res.status(200).json({
//       success: true,
//       data: artists,
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
//     const artist = await artistService.getById(req.params.id);

//     if (!artist) {
//       return res.status(404).json({
//         success: false,
//         message: "Artist not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: artist,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };




// export const create = async (req, res) => {
//   try {
//     const data = {
//       name: req.body.fullName,
//       biography: req.body.biography || null,
//       danceForm: req.body.danceStyle,
//       city: req.body.city || "",
//       image: req.file?.filename || "",
//     };

//     const artist = await artistService.create(data);

//     res.status(201).json({
//       success: true,
//       message: "Artist created successfully",
//       data: artist,
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
//     const data = {
//       name: req.body.fullName,
//       biography: req.body.biography || null,
//       danceForm: req.body.danceStyle,
//       city: req.body.city || "",
//     };

//     // Update image only if a new file is uploaded
//     if (req.file) {
//       data.image = req.file.filename;
//     }

//     const artist = await artistService.update(req.params.id, data);

//     res.status(200).json({
//       success: true,
//       message: "Artist updated successfully",
//       data: artist,
//     });
//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
// export const remove = async (req, res) => {
//   try {
//     await artistService.remove(req.params.id);

//     res.status(200).json({
//       success: true,
//       message: "Artist deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };




import * as artistService from "../services/artist.service.js";

// ============================================
// GET ALL (Admin Panel)
// ============================================
export const getAll = async (req, res) => {
  try {
    const artists = await artistService.getAll();
    res.status(200).json({ success: true, data: artists });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ============================================
// GET PUBLIC (Website - only visible artists)
// ============================================
export const getPublic = async (req, res) => {
  try {
    const artists = await artistService.getPublic();
    res.status(200).json({ success: true, data: artists });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ============================================
// GET BY ID
// ============================================
export const getById = async (req, res) => {
  try {
    const artist = await artistService.getById(req.params.id);
    if (!artist) {
      return res.status(404).json({ success: false, message: "Artist not found" });
    }
    res.status(200).json({ success: true, data: artist });
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
      name: req.body.fullName || req.body.name,
      stageName: req.body.stageName || null,
      email: req.body.email || null,
      mobile: req.body.mobile || null,
      biography: req.body.biography || null,
      danceForm: req.body.danceStyle || req.body.danceForm || null,
      experience: req.body.experience || null,
      city: req.body.city || "",
      state: req.body.state || null,
      country: req.body.country || null,
      image: req.file?.filename || req.body.image || "",
      socialLinks: req.body.socialLinks || null,
      isPublic: req.body.isPublic === true || req.body.isPublic === "true" || false,
    };

    const artist = await artistService.create(data);
    res.status(201).json({ success: true, message: "Artist created", data: artist });
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

    // Only include fields that are provided
    if (req.body.fullName || req.body.name) data.name = req.body.fullName || req.body.name;
    if (req.body.stageName !== undefined) data.stageName = req.body.stageName;
    if (req.body.email !== undefined) data.email = req.body.email;
    if (req.body.mobile !== undefined) data.mobile = req.body.mobile;
    if (req.body.biography !== undefined) data.biography = req.body.biography;
    if (req.body.danceStyle || req.body.danceForm) data.danceForm = req.body.danceStyle || req.body.danceForm;
    if (req.body.experience !== undefined) data.experience = req.body.experience;
    if (req.body.city !== undefined) data.city = req.body.city;
    if (req.body.state !== undefined) data.state = req.body.state;
    if (req.body.country !== undefined) data.country = req.body.country;
    if (req.body.socialLinks !== undefined) data.socialLinks = req.body.socialLinks;
    if (req.body.isPublic !== undefined) {
      data.isPublic = req.body.isPublic === true || req.body.isPublic === "true";
    }

    // Update image only if new file uploaded
    if (req.file) data.image = req.file.filename;

    const artist = await artistService.update(req.params.id, data);
    res.status(200).json({ success: true, message: "Artist updated", data: artist });
  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// ============================================
// TOGGLE VISIBILITY (Public/Hidden)
// ============================================
export const toggleVisibility = async (req, res) => {
  try {
    const artist = await artistService.toggleVisibility(req.params.id);
    res.status(200).json({
      success: true,
      message: `Artist is now ${artist.isPublic ? '👁️ Visible' : '🙈 Hidden'} on website`,
      data: artist,
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
    await artistService.remove(req.params.id);
    res.status(200).json({ success: true, message: "Artist deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};