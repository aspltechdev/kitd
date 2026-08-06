// import * as membershipService from "../services/membership.service.js";

// export const getAll = async (req, res) => {
//   try {
//     const memberships = await membershipService.getAll();

//     res.status(200).json({
//       success: true,
//       data: memberships,
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
//     const membership = await membershipService.getById(req.params.id);

//     if (!membership) {
//       return res.status(404).json({
//         success: false,
//         message: "Membership not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: membership,
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
//     console.log("BODY:", req.body);

//     const data = {
//       memberId: req.body.memberId,
//       fullName: req.body.fullName,
//       email: req.body.email,
//       mobile: req.body.mobile,
//       gender: req.body.gender,
//       membershipType: req.body.membershipType,
//       city: req.body.city || null,
//       state: req.body.state || null,
//       country: req.body.country || null,
//       joinedDate: req.body.joinedDate
//         ? new Date(req.body.joinedDate)
//         : null,
//       expiryDate: req.body.expiryDate
//         ? new Date(req.body.expiryDate)
//         : null,
//       isActive: req.body.isActive === "true",
//     };

//     const membership = await membershipService.create(data);

//     return res.status(201).json({
//       success: true,
//       message: "Membership created successfully",
//       data: membership,
//     });
//   } catch (error) {
//     console.error(error);

//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // export const update = async (req, res) => {
// //   try {
// //     const data = {
// //       memberId: req.body.memberId,
// //       fullName: req.body.fullName,
// //       email: req.body.email,
// //       mobile: req.body.mobile,
// //       gender: req.body.gender,
// //       membershipType: req.body.membershipType,
// //       city: req.body.city || null,
// //       state: req.body.state || null,
// //       country: req.body.country || null,
// //       joinedDate: req.body.joinedDate
// //         ? new Date(req.body.joinedDate)
// //         : null,
// //       expiryDate: req.body.expiryDate
// //         ? new Date(req.body.expiryDate)
// //         : null,
// //       isActive: req.body.isActive === "true",
// //     };

// //     const membership = await membershipService.update(req.params.id, data);

// //     return res.status(200).json({
// //       success: true,
// //       message: "Membership updated successfully",
// //       data: membership,
// //     });
// //   } catch (error) {
// //     console.error(error);

// //     return res.status(500).json({
// //       success: false,
// //       message: error.message,
// //     });
// //   }
// // };
// // controllers/membership.controller.js

// export const update = async (req, res) => {
//   try {
//     // ✅ Make sure req.body exists
//     if (!req.body || !req.body.memberId) {
//       return res.status(400).json({
//         success: false,
//         message: "memberId is required",
//       });
//     }

//     const data = {
//       memberId: req.body.memberId,
//       fullName: req.body.fullName,
//       stageName: req.body.stageName || null,
//       email: req.body.email,
//       mobile: req.body.mobile,
//       gender: req.body.gender || null,
//       dateOfBirth: req.body.dateOfBirth ? new Date(req.body.dateOfBirth) : null,
//       occupation: req.body.occupation || null,
//       biography: req.body.biography || null,
//       membershipType: req.body.membershipType || null,
//       danceStyle: req.body.danceStyle || null,
//       experience: req.body.experience || null,
//       address: req.body.address || null,
//       city: req.body.city || null,
//       state: req.body.state || null,
//       country: req.body.country || null,
//       postalCode: req.body.postalCode || null,
//       iban: req.body.iban || null,
//       accountHolder: req.body.accountHolder || null,
//       bankName: req.body.bankName || null,
//       paymentStatus: req.body.paymentStatus || "ACTIVE",
//       joinedDate: req.body.joinedDate ? new Date(req.body.joinedDate) : null,
//       expiryDate: req.body.expiryDate ? new Date(req.body.expiryDate) : null,
//       annualFee: req.body.annualFee ? parseFloat(req.body.annualFee) : null,
//       paymentDay: req.body.paymentDay ? parseInt(req.body.paymentDay) : null,
//       isActive: req.body.isActive === "true" || req.body.isActive === true,
//     };

//     if (req.file) {
//       data.image = req.file.filename;
//       data.photo = req.file.filename;
//     }

//     const membership = await membershipService.update(req.params.id, data);

//     return res.status(200).json({
//       success: true,
//       message: "Membership updated successfully",
//       data: membership,
//     });
//   } catch (error) {
//     console.error("Update Error:", error);
//     return res.status(500).json({
//       success: false,
//       message: error.message || "Failed to update member",
//     });
//   }
// };
// export const remove = async (req, res) => {
//   try {
//     await membershipService.remove(req.params.id);

//     res.status(200).json({
//       success: true,
//       message: "Membership deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };



import * as membershipService from "../services/membership.service.js";
import * as artistService from "../services/artist.service.js";
import * as teamService from "../services/team.service.js";

export const getAll = async (req, res) => {
  try {
    const memberships = await membershipService.getAll();
    res.status(200).json({ success: true, data: memberships });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const membership = await membershipService.getById(req.params.id);
    if (!membership) {
      return res.status(404).json({ success: false, message: "Membership not found" });
    }
    res.status(200).json({ success: true, data: membership });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const data = {
      memberId: req.body.memberId,
      fullName: req.body.fullName,
      email: req.body.email,
      mobile: req.body.mobile,
      gender: req.body.gender,
      membershipType: req.body.membershipType,
      city: req.body.city || null,
      state: req.body.state || null,
      country: req.body.country || null,
      joinedDate: req.body.joinedDate ? new Date(req.body.joinedDate) : null,
      expiryDate: req.body.expiryDate ? new Date(req.body.expiryDate) : null,
      isActive: req.body.isActive === "true",
    };
    const membership = await membershipService.create(data);
    return res.status(201).json({ success: true, message: "Membership created", data: membership });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    if (!req.body || !req.body.memberId) {
      return res.status(400).json({ success: false, message: "memberId is required" });
    }
    const data = {
      memberId: req.body.memberId,
      fullName: req.body.fullName,
      stageName: req.body.stageName || null,
      email: req.body.email,
      mobile: req.body.mobile,
      gender: req.body.gender || null,
      dateOfBirth: req.body.dateOfBirth ? new Date(req.body.dateOfBirth) : null,
      occupation: req.body.occupation || null,
      biography: req.body.biography || null,
      membershipType: req.body.membershipType || null,
      danceStyle: req.body.danceStyle || null,
      experience: req.body.experience || null,
      address: req.body.address || null,
      city: req.body.city || null,
      state: req.body.state || null,
      country: req.body.country || null,
      postalCode: req.body.postalCode || null,
      iban: req.body.iban || null,
      accountHolder: req.body.accountHolder || null,
      bankName: req.body.bankName || null,
      paymentStatus: req.body.paymentStatus || "ACTIVE",
      joinedDate: req.body.joinedDate ? new Date(req.body.joinedDate) : null,
      expiryDate: req.body.expiryDate ? new Date(req.body.expiryDate) : null,
      annualFee: req.body.annualFee ? parseFloat(req.body.annualFee) : null,
      paymentDay: req.body.paymentDay ? parseInt(req.body.paymentDay) : null,
      isActive: req.body.isActive === "true" || req.body.isActive === true,
    };
    if (req.file) {
      data.image = req.file.filename;
      data.photo = req.file.filename;
    }
    const membership = await membershipService.update(req.params.id, data);
    return res.status(200).json({ success: true, message: "Membership updated", data: membership });
  } catch (error) {
    console.error("Update Error:", error);
    return res.status(500).json({ success: false, message: error.message || "Failed to update member" });
  }
};

// ✅ DELETE - Cascading delete for Artist and Team
export const remove = async (req, res) => {
  try {
    const memberId = req.params.id;

    // Get member details first
    const member = await membershipService.getById(memberId);
    
    if (!member) {
      return res.status(404).json({ success: false, message: "Member not found" });
    }

    // ✅ Delete related Artist record (by email)
    try {
      const artist = await artistService.findByEmail(member.email);
      if (artist) {
        await artistService.remove(artist.id);
        console.log("✅ Artist deleted:", artist.id);
      }
    } catch (err) {
      console.log("⚠️ No artist record found or already deleted");
    }

    // ✅ Delete related Team record (by email)
    try {
      const teamMember = await teamService.findByEmail(member.email);
      if (teamMember) {
        await teamService.remove(teamMember.id);
        console.log("✅ Team member deleted:", teamMember.id);
      }
    } catch (err) {
      console.log("⚠️ No team record found or already deleted");
    }

    // Finally delete the member
    await membershipService.remove(memberId);

    res.status(200).json({
      success: true,
      message: "Member, Artist, and Team records deleted successfully",
    });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};