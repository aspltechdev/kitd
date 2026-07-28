// // import * as contactService from "../services/contact.service.js";

// // export const getAll = async (req, res) => {
// //   try {
// //     const contacts = await contactService.getAll();

// //     res.status(200).json({
// //       success: true,
// //       data: contacts,
// //     });
// //   } catch (error) {
// //     res.status(500).json({
// //       success: false,
// //       message: error.message,
// //     });
// //   }
// // };

// // export const getById = async (req, res) => {
// //   try {
// //     const contact = await contactService.getById(req.params.id);

// //     if (!contact) {
// //       return res.status(404).json({
// //         success: false,
// //         message: "Contact not found",
// //       });
// //     }

// //     res.status(200).json({
// //       success: true,
// //       data: contact,
// //     });
// //   } catch (error) {
// //     res.status(500).json({
// //       success: false,
// //       message: error.message,
// //     });
// //   }
// // };

// // export const create = async (req, res) => {
// //   try {
// //     const contact = await contactService.create(req.body);

// //     res.status(201).json({
// //       success: true,
// //       message: "Message submitted successfully",
// //       data: contact,
// //     });
// //   } catch (error) {
// //     res.status(500).json({
// //       success: false,
// //       message: error.message,
// //     });
// //   }
// // };

// // export const update = async (req, res) => {
// //   try {
// //     const contact = await contactService.update(req.params.id, req.body);

// //     res.status(200).json({
// //       success: true,
// //       message: "Contact updated successfully",
// //       data: contact,
// //     });
// //   } catch (error) {
// //     res.status(500).json({
// //       success: false,
// //       message: error.message,
// //     });
// //   }
// // };

// // export const remove = async (req, res) => {
// //   try {
// //     await contactService.remove(req.params.id);

// //     res.status(200).json({
// //       success: true,
// //       message: "Contact deleted successfully",
// //     });
// //   } catch (error) {
// //     res.status(500).json({
// //       success: false,
// //       message: error.message,
// //     });
// //   }
// // };


// import * as contactService from "../services/contact.service.js";
// import { sendEmail } from "../services/email.service.js";
// import contactEmail from "../templates/contactEmail.js";

// export const getAll = async (req, res) => {
//   try {
//     const contacts = await contactService.getAll();

//     res.status(200).json({
//       success: true,
//       data: contacts,
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
//     const contact = await contactService.getById(req.params.id);

//     if (!contact) {
//       return res.status(404).json({
//         success: false,
//         message: "Contact not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: contact,
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
//       name: req.body.fullName, // Map frontend fullName -> DB name
//       email: req.body.email,
//       phone: req.body.phone,
//       subject: req.body.subject,
//       message: req.body.message,
//     };

//     const contact = await contactService.create(data);

//     try {
//       await sendEmail({
//         to: contact.email,
//         subject: "We've Received Your Enquiry - KITD Germany",
//         html: contactEmail(contact.name),
//       });
//     } catch (emailError) {
//       console.error("Email Error:", emailError.message);
//     }

//     return res.status(201).json({
//       success: true,
//       message: "Contact enquiry submitted successfully.",
//       data: contact,
//     });
//   } catch (error) {
//     console.error(error);

//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };


// export const update = async (req, res) => {
//   try {
//     const contact = await contactService.update(req.params.id, req.body);

//     res.status(200).json({
//       success: true,
//       message: "Contact updated successfully.",
//       data: contact,
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
//     await contactService.remove(req.params.id);

//     res.status(200).json({
//       success: true,
//       message: "Contact deleted successfully.",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

import * as contactService from "../services/contact.service.js";
import { sendEmail } from "../services/email.service.js";
import contactEmail from "../templates/contactEmail.js";

export const getAll = async (req, res) => {
  try {
    const contacts = await contactService.getAll();
    res.status(200).json({
      success: true,
      data: contacts,
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
    const contact = await contactService.getById(req.params.id);
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }
    res.status(200).json({
      success: true,
      data: contact,
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
    // ✅ FIXED: Use fullName to match Prisma schema
    const data = {
      fullName: req.body.fullName,
      email: req.body.email,
      phone: req.body.phone,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
      subject: req.body.subject,
      enquiryType: req.body.enquiryType,
      message: req.body.message,
    };

    const contact = await contactService.create(data);

    // Send confirmation email
    try {
      await sendEmail({
        to: contact.email,
        subject: "We've Received Your Enquiry - KITD Germany",
        html: contactEmail(contact.fullName), // ✅ Use fullName
      });
      console.log("Contact confirmation email sent.");
    } catch (emailError) {
      console.error("Email Error:", emailError.message);
    }

    res.status(201).json({
      success: true,
      message: "Contact enquiry submitted successfully.",
      data: contact,
    });
  } catch (error) {
    console.error("Contact creation error:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const contact = await contactService.update(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "Contact updated successfully.",
      data: contact,
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
    await contactService.remove(req.params.id);
    res.status(200).json({
      success: true,
      message: "Contact deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};