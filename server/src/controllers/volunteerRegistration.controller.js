// import * as volunteerService from "../services/volunteerRegistration.service.js";

// export const getAll = async (req, res) => {
//   try {
//     const volunteers = await volunteerService.getAll(req.query);

//     res.status(200).json({
//       success: true,
//       data: volunteers,
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
//     const volunteer = await volunteerService.getById(req.params.id);

//     if (!volunteer) {
//       return res.status(404).json({
//         success: false,
//         message: "Volunteer registration not found.",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: volunteer,
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
//     const volunteer = await volunteerService.create(req.body);

//     res.status(201).json({
//       success: true,
//       message: "Volunteer registration submitted successfully.",
//       data: volunteer,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// export const updateStatus = async (req, res) => {
//   try {
//     const volunteer = await volunteerService.updateStatus(
//       req.params.id,
//       req.body.status
//     );

//     res.status(200).json({
//       success: true,
//       message: "Status updated successfully.",
//       data: volunteer,
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
//     await volunteerService.remove(req.params.id);

//     res.status(200).json({
//       success: true,
//       message: "Volunteer registration deleted successfully.",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

import * as volunteerService from "../services/volunteerRegistration.service.js";
import { sendEmail } from "../services/email.service.js";
import volunteerEmail from "../templates/volunteerEmail.js";

export const getAll = async (req, res) => {
  try {
    const volunteers = await volunteerService.getAll(req.query);

    res.status(200).json({
      success: true,
      data: volunteers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getById = async (req, res) => {
  try {
    const volunteer = await volunteerService.getById(req.params.id);

    if (!volunteer) {
      return res.status(404).json({
        success: false,
        message: "Volunteer registration not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: volunteer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const create = async (req, res) => {
  try {
    // Save registration
    const volunteer = await volunteerService.create(req.body);

    // Send confirmation email
    try {
      await sendEmail({
        to: volunteer.email,
        subject: "Volunteer Registration Received - KITD Germany",
        html: volunteerEmail(volunteer.fullName),
      });

      console.log("Volunteer confirmation email sent.");
    } catch (emailError) {
      console.error("Email Error:", emailError.message);
      // Do not fail the API if email sending fails
    }

    res.status(201).json({
      success: true,
      message: "Volunteer registration submitted successfully.",
      data: volunteer,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const volunteer = await volunteerService.updateStatus(
      req.params.id,
      req.body.status
    );

    res.status(200).json({
      success: true,
      message: "Status updated successfully.",
      data: volunteer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const remove = async (req, res) => {
  try {
    await volunteerService.remove(req.params.id);

    res.status(200).json({
      success: true,
      message: "Volunteer registration deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};