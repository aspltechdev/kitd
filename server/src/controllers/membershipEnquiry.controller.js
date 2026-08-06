// import * as membershipEnquiryService from "../services/membershipEnquiry.service.js";

// export const getAll = async (req, res) => {
//   try {
//     const enquiries = await membershipEnquiryService.getAll();

//     res.status(200).json({
//       success: true,
//       data: enquiries,
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
//     const enquiry = await membershipEnquiryService.getById(req.params.id);

//     if (!enquiry) {
//       return res.status(404).json({
//         success: false,
//         message: "Membership enquiry not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: enquiry,
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
//     const enquiry = await membershipEnquiryService.create(req.body);

//     res.status(201).json({
//       success: true,
//       message: "Membership application submitted successfully",
//       data: enquiry,
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
//     const enquiry = await membershipEnquiryService.updateStatus(
//       req.params.id,
//       req.body.status
//     );

//     res.status(200).json({
//       success: true,
//       message: "Status updated successfully",
//       data: enquiry,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// export const approve = async (req, res) => {
//   try {
//     const member = await membershipEnquiryService.approve(req.params.id);

//     res.status(200).json({
//       success: true,
//       message: "Member approved successfully",
//       data: member,
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
//     await membershipEnquiryService.remove(req.params.id);

//     res.status(200).json({
//       success: true,
//       message: "Membership enquiry deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };


// import * as membershipEnquiryService from "../services/membershipEnquiry.service.js";
// import { sendEmail } from "../services/email.service.js";
// import membershipEmail from "../templates/membershipEmail.js";
// import * as memberRegistrationService from "../services/memberRegistration.service.js";

// export const getAll = async (req, res) => {
//   try {
//     const enquiries = await membershipEnquiryService.getAll();

//     res.status(200).json({
//       success: true,
//       data: enquiries,
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
//     const enquiry = await membershipEnquiryService.getById(req.params.id);

//     if (!enquiry) {
//       return res.status(404).json({
//         success: false,
//         message: "Membership enquiry not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: enquiry,
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
//     // Save enquiry
//     const enquiry = await membershipEnquiryService.create(req.body);

//     // Send confirmation email
//     try {
//       await sendEmail({
//         to: enquiry.email,
//         subject: "Membership Application Received - KITD Germany",
//         html: membershipEmail(enquiry.fullName),
//       });

//       console.log("Membership confirmation email sent.");
//     } catch (emailError) {
//       console.error("Email Error:", emailError.message);
//       // Continue even if email fails
//     }

//     res.status(201).json({
//       success: true,
//       message: "Membership application submitted successfully",
//       data: enquiry,
//     });
//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// export const updateStatus = async (req, res) => {
//   try {
//     const enquiry = await membershipEnquiryService.updateStatus(
//       req.params.id,
//       req.body.status
//     );

//     res.status(200).json({
//       success: true,
//       message: "Status updated successfully",
//       data: enquiry,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// export const approve = async (req, res) => {
//   try {
//     const member = await membershipEnquiryService.approve(req.params.id);

//     // Optional: Send approval email
//     /*
//     await sendEmail({
//       to: member.email,
//       subject: "Congratulations! Your Membership Has Been Approved",
//       html: membershipApprovedEmail(member.fullName),
//     });
//     */

//     res.status(200).json({
//       success: true,
//       message: "Member approved successfully",
//       data: member,
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
//     await membershipEnquiryService.remove(req.params.id);

//     res.status(200).json({
//       success: true,
//       message: "Membership enquiry deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };



// export const startReview = async (req, res) => {
//   try {
//     const enquiry = await membershipEnquiryService.update(req.params.id, {
//       status: "UNDER_REVIEW",
//     });

//     await sendEmail({
//       to: enquiry.email,
//       subject: "Your Membership Application is Under Review",
//       html: `
//         <h2>Hello ${enquiry.fullName},</h2>

//         <p>Thank you for submitting your membership enquiry.</p>

//         <p>Your application is now <strong>Under Review</strong> by the KITD Membership Committee.</p>

//         <p>We will notify you once the review process is complete.</p>

//         <br/>

//         <p>Regards,</p>
//         <p><strong>KITD Germany</strong></p>
//       `,
//     });

//     res.status(200).json({
//       success: true,
//       message: "Application moved to Under Review.",
//       data: enquiry,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };


// export const sendRegistrationForm = async (req, res) => {
//   try {
//     const token = uuidv4();

//     const enquiry = await membershipEnquiryService.update(req.params.id, {
//       status: "REGISTRATION_PENDING",
//       registrationToken: token,
//     });

//     const registrationLink = `${process.env.CLIENT_URL}/member-registration/${token}`;

//     await sendEmail({
//       to: enquiry.email,
//       subject: "Complete Your Membership Registration",
//       html: `
//         <h2>Congratulations ${enquiry.fullName}!</h2>

//         <p>Your membership enquiry has been approved.</p>

//         <p>Please complete your registration using the link below.</p>

//         <a href="${registrationLink}">
//           Complete Registration
//         </a>

//         <br/><br/>

//         <p>This link will expire in 7 days.</p>

//         <p>Regards,<br/>KITD Germany</p>
//       `,
//     });

//     res.status(200).json({
//       success: true,
//       message: "Registration invitation sent.",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// export const requestChanges = async (req, res) => {
//   try {
//     const { remarks } = req.body;

//     const enquiry = await membershipEnquiryService.update(req.params.id, {
//       status: "CHANGES_REQUESTED",
//       remarks,
//     });

//     await sendEmail({
//       to: enquiry.email,
//       subject: "Changes Required for Your Membership Application",
//       html: `
//         <h2>Hello ${enquiry.fullName}</h2>

//         <p>Your application requires some corrections.</p>

//         <h3>Admin Remarks</h3>

//         <p>${remarks}</p>

//         <br/>

//         <p>Please update your registration and submit again.</p>

//         <p>Regards,<br/>KITD Germany</p>
//       `,
//     });

//     res.status(200).json({
//       success: true,
//       message: "Change request sent.",
//       data: enquiry,
//     });

//   } catch (error) {

//     res.status(500).json({
//       success:false,
//       message:error.message
//     });

//   }
// };

// export const approveMember = async (req, res) => {
//   try {

//     const enquiry = await membershipEnquiryService.update(req.params.id,{
//       status:"APPROVED"
//     });

//     await sendEmail({
//       to: enquiry.email,
//       subject:"Congratulations! Your Membership Has Been Approved",
//       html:`
//       <h2>Congratulations ${enquiry.fullName} 🎉</h2>

//       <p>Your membership has been officially approved.</p>

//       <p>Welcome to KITD Germany.</p>

//       <p>We look forward to seeing you in our upcoming events and activities.</p>

//       <br/>

//       <p>Regards</p>
//       <p><strong>KITD Germany</strong></p>
//       `
//     });

//     res.status(200).json({
//       success:true,
//       message:"Member approved successfully.",
//       data:enquiry
//     });

//   } catch(error){

//     res.status(500).json({
//       success:false,
//       message:error.message
//     });

//   }
// };


// export const submitRegistration = async (req, res) => {
//   try {
//     const { token } = req.params;

//     const enquiry = await membershipEnquiryService.getByToken(token);

//     if (!enquiry) {
//       return res.status(404).json({
//         success: false,
//         message: "Invalid registration link",
//       });
//     }

//     const registration = await memberRegistrationService.create({
//       enquiryId: enquiry.id,

//       fullName: req.body.fullName,
//       gender: req.body.gender,
//       dateOfBirth: req.body.dateOfBirth
//         ? new Date(req.body.dateOfBirth)
//         : null,

//       address: req.body.address,
//       city: req.body.city,
//       state: req.body.state,
//       country: req.body.country,

//       danceStyle: req.body.danceStyle,
//       guru: req.body.guru,
//       experience: req.body.experience,

//       document: req.file?.filename || null,
//     });

//     await membershipEnquiryService.registrationSubmitted(enquiry.id);

//     return res.status(201).json({
//       success: true,
//       data: registration,
//     });

//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// export const validateRegistrationToken = async (req, res) => {
//   try {
//     const { token } = req.params;

//     const enquiry = await membershipEnquiryService.getByToken(token);

//     if (!enquiry) {
//       return res.status(404).json({
//         success: false,
//         message: "Invalid registration link.",
//       });
//     }

//     if (
//       enquiry.tokenExpiry &&
//       new Date(enquiry.tokenExpiry) < new Date()
//     ) {
//       return res.status(400).json({
//         success: false,
//         message: "Registration link has expired.",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       data: enquiry,
//     });

//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };



// import { v4 as uuidv4 } from "uuid";
// import * as membershipEnquiryService from "../services/membershipEnquiry.service.js";
// import { sendEmail } from "../services/email.service.js";
// import membershipEmail from "../templates/membershipEmail.js";
// import underReviewEmail from "../templates/underReviewEmail.js";
// import registrationInvitationEmail from "../templates/registrationInvitationEmail.js";
// import registrationSubmittedEmail from "../templates/registrationSubmittedEmail.js";
// import changesRequestedEmail from "../templates/changesRequestedEmail.js";
// import memberApprovedEmail from "../templates/memberApprovedEmail.js";
// import adminRegistrationReceivedEmail from "../templates/adminRegistrationReceivedEmail.js";
// import * as memberRegistrationService from "../services/memberRegistration.service.js";

// export const getAll = async (req, res) => {
//   try {
//     const enquiries = await membershipEnquiryService.getAll();

//     res.status(200).json({
//       success: true,
//       data: enquiries,
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
//     const enquiry = await membershipEnquiryService.getById(req.params.id);

//     if (!enquiry) {
//       return res.status(404).json({
//         success: false,
//         message: "Membership enquiry not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: enquiry,
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
//     // Save enquiry
//     const enquiry = await membershipEnquiryService.create(req.body);

//     // Send confirmation email
//     try {
//       await sendEmail({
//         to: enquiry.email,
//         subject: "Membership Application Received - KITD Germany",
//         html: membershipEmail(enquiry.fullName),
//       });

//       console.log("Membership confirmation email sent.");
//     } catch (emailError) {
//       console.error("Email Error:", emailError.message);
//       // Continue even if email fails
//     }

//     res.status(201).json({
//       success: true,
//       message: "Membership application submitted successfully",
//       data: enquiry,
//     });
//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// export const updateStatus = async (req, res) => {
//   try {
//     const enquiry = await membershipEnquiryService.updateStatus(
//       req.params.id,
//       req.body.status
//     );

//     res.status(200).json({
//       success: true,
//       message: "Status updated successfully",
//       data: enquiry,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// export const approve = async (req, res) => {
//   try {
//     const member = await membershipEnquiryService.approve(req.params.id);

//     // Send approval email
//     await sendEmail({
//       to: member.email,
//       subject: "Congratulations! Your Membership Has Been Approved",
//       html: memberApprovedEmail(member.fullName, member.memberId),
//     });

//     res.status(200).json({
//       success: true,
//       message: "Member approved successfully",
//       data: member,
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
//     await membershipEnquiryService.remove(req.params.id);

//     res.status(200).json({
//       success: true,
//       message: "Membership enquiry deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // ✅ FIXED: startReview - Uses proper service method
// export const startReview = async (req, res) => {
//   try {
//     const enquiry = await membershipEnquiryService.startReview(req.params.id);

//     await sendEmail({
//       to: enquiry.email,
//       subject: "Your Membership Application is Under Review",
//       html: underReviewEmail(enquiry.fullName),
//     });

//     res.status(200).json({
//       success: true,
//       message: "Application moved to Under Review.",
//       data: enquiry,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // ✅ FIXED: sendRegistrationForm - Uses proper service method with token
// export const sendRegistrationForm = async (req, res) => {
//   try {
//     const token = uuidv4();
//     const expiry = new Date();
//     expiry.setDate(expiry.getDate() + 7);

//     const enquiry = await membershipEnquiryService.sendRegistration(
//       req.params.id,
//       token,
//       expiry
//     );

//     const registrationLink = `${process.env.CLIENT_URL}/member-registration/${token}`;

//     await sendEmail({
//       to: enquiry.email,
//       subject: "Complete Your Membership Registration",
//       html: registrationInvitationEmail(enquiry.fullName, registrationLink),
//     });

//     res.status(200).json({
//       success: true,
//       message: "Registration invitation sent.",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // ✅ FIXED: requestChanges - Uses proper service method
// export const requestChanges = async (req, res) => {
//   try {
//     const { remarks } = req.body;

//     const enquiry = await membershipEnquiryService.requestChanges(
//       req.params.id,
//       remarks
//     );

//     await sendEmail({
//       to: enquiry.email,
//       subject: "Changes Required for Your Membership Application",
//       html: changesRequestedEmail(enquiry.fullName, remarks),
//     });

//     res.status(200).json({
//       success: true,
//       message: "Change request sent.",
//       data: enquiry,
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// // ✅ FIXED: approveMember - Uses proper service method
// export const approveMember = async (req, res) => {
//   try {
//     const member = await membershipEnquiryService.approve(req.params.id);

//     await sendEmail({
//       to: member.email,
//       subject: "Congratulations! Your Membership Has Been Approved",
//       html: memberApprovedEmail(member.fullName, member.memberId),
//     });

//     res.status(200).json({
//       success: true,
//       message: "Member approved successfully.",
//       data: member
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// // ✅ FIXED: submitRegistration - Added token expiry check and emails
// export const submitRegistration = async (req, res) => {
//   try {
//     const { token } = req.params;

//     const enquiry = await membershipEnquiryService.getByToken(token);

//     if (!enquiry) {
//       return res.status(404).json({
//         success: false,
//         message: "Invalid registration link",
//       });
//     }

//     // ✅ Token expiry check
//     if (
//       enquiry.tokenExpiry &&
//       new Date(enquiry.tokenExpiry) < new Date()
//     ) {
//       return res.status(400).json({
//         success: false,
//         message: "Registration link has expired.",
//       });
//     }

//     const registration = await memberRegistrationService.create({
//       enquiryId: enquiry.id,

//       fullName: req.body.fullName,
//       gender: req.body.gender,
//       dateOfBirth: req.body.dateOfBirth
//         ? new Date(req.body.dateOfBirth)
//         : null,

//       address: req.body.address,
//       city: req.body.city,
//       state: req.body.state,
//       country: req.body.country,

//       danceStyle: req.body.danceStyle,
//       guru: req.body.guru,
//       experience: req.body.experience,

//       document: req.file?.filename || null,
//     });

//     await membershipEnquiryService.registrationSubmitted(enquiry.id);

//     // ✅ Send confirmation email to applicant
//     await sendEmail({
//       to: enquiry.email,
//       subject: "Registration Submitted Successfully",
//       html: registrationSubmittedEmail(enquiry.fullName),
//     });

//     // ✅ Send notification email to admin
//     await sendEmail({
//       to: process.env.ADMIN_EMAIL,
//       subject: "New Membership Registration Received",
//       html: adminRegistrationReceivedEmail(enquiry.fullName),
//     });

//     return res.status(201).json({
//       success: true,
//       data: registration,
//     });

//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // ✅ Token validation endpoint
// export const validateRegistrationToken = async (req, res) => {
//   try {
//     const { token } = req.params;

//     const enquiry = await membershipEnquiryService.getByToken(token);

//     if (!enquiry) {
//       return res.status(404).json({
//         success: false,
//         message: "Invalid registration link.",
//       });
//     }

//     if (
//       enquiry.tokenExpiry &&
//       new Date(enquiry.tokenExpiry) < new Date()
//     ) {
//       return res.status(400).json({
//         success: false,
//         message: "Registration link has expired.",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       data: enquiry,
//     });

//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };


// import { v4 as uuidv4 } from "uuid";
// import * as membershipEnquiryService from "../services/membershipEnquiry.service.js";
// import { sendEmail } from "../services/email.service.js";
// import membershipEmail from "../templates/membershipEmail.js";
// import underReviewEmail from "../templates/underReviewEmail.js";
// import registrationInvitationEmail from "../templates/registrationInvitationEmail.js";
// import registrationSubmittedEmail from "../templates/registrationSubmittedEmail.js";
// import changesRequestedEmail from "../templates/changesRequestedEmail.js";
// import memberApprovedEmail from "../templates/memberApprovedEmail.js";
// import adminRegistrationReceivedEmail from "../templates/adminRegistrationReceivedEmail.js";
// import * as memberRegistrationService from "../services/memberRegistration.service.js";

// export const getAll = async (req, res) => {
//   try {
//     const enquiries = await membershipEnquiryService.getAll();

//     res.status(200).json({
//       success: true,
//       data: enquiries,
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
//     const enquiry = await membershipEnquiryService.getById(req.params.id);

//     if (!enquiry) {
//       return res.status(404).json({
//         success: false,
//         message: "Membership enquiry not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: enquiry,
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
//     // Handle file upload if present
//     const photo = req.file?.filename || null;

//     // Parse socialLinks if it's a string (from FormData)
//     let socialLinks = req.body.socialLinks;
//     if (typeof socialLinks === 'string') {
//       try {
//         socialLinks = JSON.parse(socialLinks);
//       } catch (e) {
//         socialLinks = null;
//       }
//     }

//     // Handle dateOfBirth conversion
//     const dateOfBirth = req.body.dateOfBirth 
//       ? new Date(req.body.dateOfBirth) 
//       : null;

//     // Prepare enquiry data with all new fields
//     const enquiryData = {
//       fullName: req.body.fullName,
//       stageName: req.body.stageName || null,
//       email: req.body.email?.toLowerCase().trim(),
//       mobile: req.body.mobile,
//       gender: req.body.gender || null,
//       dateOfBirth: dateOfBirth,
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
//       socialLinks: socialLinks,
//       message: req.body.message || null,
//       photo: photo,
//     };

//     // Save enquiry
//     const enquiry = await membershipEnquiryService.create(enquiryData);

//     // Send confirmation email
//     try {
//       await sendEmail({
//         to: enquiry.email,
//         subject: "Membership Application Received - KITD Germany",
//         html: membershipEmail(enquiry.fullName),
//       });

//       console.log("Membership confirmation email sent.");
//     } catch (emailError) {
//       console.error("Email Error:", emailError.message);
//       // Continue even if email fails
//     }

//     // Send notification to admin
//     try {
//       await sendEmail({
//         to: process.env.ADMIN_EMAIL,
//         subject: `New Membership Application - ${enquiry.fullName}`,
//         html: `
//           <h2>New Membership Application Received</h2>
//           <p><strong>Name:</strong> ${enquiry.fullName}</p>
//           <p><strong>Stage Name:</strong> ${enquiry.stageName || 'N/A'}</p>
//           <p><strong>Email:</strong> ${enquiry.email}</p>
//           <p><strong>Phone:</strong> ${enquiry.mobile}</p>
//           <p><strong>Membership Type:</strong> ${enquiry.membershipType || 'N/A'}</p>
//           <p><strong>Dance Style:</strong> ${enquiry.danceStyle || 'N/A'}</p>
//           <p><strong>City:</strong> ${enquiry.city || 'N/A'}</p>
//           <p><strong>Country:</strong> ${enquiry.country || 'N/A'}</p>
//           ${enquiry.biography ? `<p><strong>Biography:</strong> ${enquiry.biography.substring(0, 200)}...</p>` : ''}
//           <br/>
//           <p>Login to admin panel to review the application.</p>
//         `,
//       });
//     } catch (emailError) {
//       console.error("Admin Email Error:", emailError.message);
//     }

//     res.status(201).json({
//       success: true,
//       message: "Membership application submitted successfully",
//       data: enquiry,
//     });
//   } catch (error) {
//     console.error("Create Enquiry Error:", error);

//     // Handle validation errors
//     if (error.code === 'P2002') {
//       return res.status(400).json({
//         success: false,
//         message: "An application with this email already exists.",
//       });
//     }

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// export const update = async (req, res) => {
//   try {
//     const { id } = req.params;
    
//     // Check if enquiry exists
//     const existingEnquiry = await membershipEnquiryService.getById(id);
//     if (!existingEnquiry) {
//       return res.status(404).json({
//         success: false,
//         message: "Membership enquiry not found",
//       });
//     }

//     // Handle file upload if present
//     const photo = req.file?.filename || existingEnquiry.photo;

//     // Parse socialLinks if it's a string
//     let socialLinks = req.body.socialLinks;
//     if (typeof socialLinks === 'string') {
//       try {
//         socialLinks = JSON.parse(socialLinks);
//       } catch (e) {
//         socialLinks = existingEnquiry.socialLinks;
//       }
//     }

//     // Handle dateOfBirth conversion
//     const dateOfBirth = req.body.dateOfBirth 
//       ? new Date(req.body.dateOfBirth) 
//       : existingEnquiry.dateOfBirth;

//     // Prepare update data
//     const updateData = {
//       fullName: req.body.fullName || existingEnquiry.fullName,
//       stageName: req.body.stageName !== undefined ? req.body.stageName : existingEnquiry.stageName,
//       email: req.body.email?.toLowerCase().trim() || existingEnquiry.email,
//       mobile: req.body.mobile || existingEnquiry.mobile,
//       gender: req.body.gender !== undefined ? req.body.gender : existingEnquiry.gender,
//       dateOfBirth: dateOfBirth,
//       occupation: req.body.occupation !== undefined ? req.body.occupation : existingEnquiry.occupation,
//       biography: req.body.biography !== undefined ? req.body.biography : existingEnquiry.biography,
//       membershipType: req.body.membershipType || existingEnquiry.membershipType,
//       danceStyle: req.body.danceStyle !== undefined ? req.body.danceStyle : existingEnquiry.danceStyle,
//       experience: req.body.experience !== undefined ? req.body.experience : existingEnquiry.experience,
//       address: req.body.address !== undefined ? req.body.address : existingEnquiry.address,
//       city: req.body.city || existingEnquiry.city,
//       state: req.body.state !== undefined ? req.body.state : existingEnquiry.state,
//       country: req.body.country || existingEnquiry.country,
//       postalCode: req.body.postalCode !== undefined ? req.body.postalCode : existingEnquiry.postalCode,
//       socialLinks: socialLinks,
//       message: req.body.message !== undefined ? req.body.message : existingEnquiry.message,
//       photo: photo,
//     };

//     const enquiry = await membershipEnquiryService.update(id, updateData);

//     res.status(200).json({
//       success: true,
//       message: "Membership enquiry updated successfully",
//       data: enquiry,
//     });
//   } catch (error) {
//     console.error("Update Enquiry Error:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// export const updateStatus = async (req, res) => {
//   try {
//     const enquiry = await membershipEnquiryService.updateStatus(
//       req.params.id,
//       req.body.status,
//       req.body.remarks || null
//     );

//     res.status(200).json({
//       success: true,
//       message: "Status updated successfully",
//       data: enquiry,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// export const approve = async (req, res) => {
//   try {
//     const member = await membershipEnquiryService.approve(req.params.id);

//     // Send approval email
//     await sendEmail({
//       to: member.email,
//       subject: "Congratulations! Your Membership Has Been Approved",
//       html: memberApprovedEmail(member.fullName, member.memberId),
//     });

//     res.status(200).json({
//       success: true,
//       message: "Member approved successfully",
//       data: member,
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
//     await membershipEnquiryService.remove(req.params.id);

//     res.status(200).json({
//       success: true,
//       message: "Membership enquiry deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // ✅ FIXED: startReview - Uses proper service method
// export const startReview = async (req, res) => {
//   try {
//     const enquiry = await membershipEnquiryService.startReview(req.params.id);

//     await sendEmail({
//       to: enquiry.email,
//       subject: "Your Membership Application is Under Review",
//       html: underReviewEmail(enquiry.fullName),
//     });

//     res.status(200).json({
//       success: true,
//       message: "Application moved to Under Review.",
//       data: enquiry,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // ✅ FIXED: sendRegistrationForm - Uses proper service method with token
// export const sendRegistrationForm = async (req, res) => {
//   try {
//     const token = uuidv4();
//     const expiry = new Date();
//     expiry.setDate(expiry.getDate() + 7);

//     const enquiry = await membershipEnquiryService.sendRegistration(
//       req.params.id,
//       token,
//       expiry
//     );

//     const registrationLink = `${process.env.CLIENT_URL}/member-registration/${token}`;

//     await sendEmail({
//       to: enquiry.email,
//       subject: "Complete Your Membership Registration",
//       html: registrationInvitationEmail(enquiry.fullName, registrationLink),
//     });

//     res.status(200).json({
//       success: true,
//       message: "Registration invitation sent.",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // ✅ FIXED: requestChanges - Uses proper service method
// export const requestChanges = async (req, res) => {
//   try {
//     const { remarks } = req.body;

//     const enquiry = await membershipEnquiryService.requestChanges(
//       req.params.id,
//       remarks
//     );

//     await sendEmail({
//       to: enquiry.email,
//       subject: "Changes Required for Your Membership Application",
//       html: changesRequestedEmail(enquiry.fullName, remarks),
//     });

//     res.status(200).json({
//       success: true,
//       message: "Change request sent.",
//       data: enquiry,
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// // ✅ FIXED: approveMember - Uses proper service method
// export const approveMember = async (req, res) => {
//   try {
//     const member = await membershipEnquiryService.approve(req.params.id);

//     await sendEmail({
//       to: member.email,
//       subject: "Congratulations! Your Membership Has Been Approved",
//       html: memberApprovedEmail(member.fullName, member.memberId),
//     });

//     res.status(200).json({
//       success: true,
//       message: "Member approved successfully.",
//       data: member
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// // ✅ FIXED: submitRegistration - Added token expiry check and emails
// export const submitRegistration = async (req, res) => {
//   try {
//     const { token } = req.params;

//     const enquiry = await membershipEnquiryService.getByToken(token);

//     if (!enquiry) {
//       return res.status(404).json({
//         success: false,
//         message: "Invalid registration link",
//       });
//     }

//     // ✅ Token expiry check
//     if (
//       enquiry.tokenExpiry &&
//       new Date(enquiry.tokenExpiry) < new Date()
//     ) {
//       return res.status(400).json({
//         success: false,
//         message: "Registration link has expired.",
//       });
//     }

//     // Handle file upload if present
//     const documentFile = req.file?.filename || null;

//     const registration = await memberRegistrationService.create({
//       enquiryId: enquiry.id,

//       fullName: req.body.fullName,
//       gender: req.body.gender,
//       dateOfBirth: req.body.dateOfBirth
//         ? new Date(req.body.dateOfBirth)
//         : null,

//       address: req.body.address,
//       city: req.body.city,
//       state: req.body.state,
//       country: req.body.country,
//       postalCode: req.body.postalCode || null,

//       danceStyle: req.body.danceStyle,
//       guru: req.body.guru,
//       experience: req.body.experience,
      
//       stageName: req.body.stageName || null,
//       biography: req.body.biography || null,
//       socialLinks: req.body.socialLinks || null,

//       document: documentFile,
//     });

//     await membershipEnquiryService.registrationSubmitted(enquiry.id);

//     // ✅ Send confirmation email to applicant
//     await sendEmail({
//       to: enquiry.email,
//       subject: "Registration Submitted Successfully",
//       html: registrationSubmittedEmail(enquiry.fullName),
//     });

//     // ✅ Send notification email to admin
//     await sendEmail({
//       to: process.env.ADMIN_EMAIL,
//       subject: "New Membership Registration Received",
//       html: adminRegistrationReceivedEmail(enquiry.fullName),
//     });

//     return res.status(201).json({
//       success: true,
//       data: registration,
//     });

//   } catch (error) {
//     console.error("Registration Error:", error);
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // ✅ Token validation endpoint
// export const validateRegistrationToken = async (req, res) => {
//   try {
//     const { token } = req.params;

//     const enquiry = await membershipEnquiryService.getByToken(token);

//     if (!enquiry) {
//       return res.status(404).json({
//         success: false,
//         message: "Invalid registration link.",
//       });
//     }

//     if (
//       enquiry.tokenExpiry &&
//       new Date(enquiry.tokenExpiry) < new Date()
//     ) {
//       return res.status(400).json({
//         success: false,
//         message: "Registration link has expired.",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       data: enquiry,
//     });

//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // ✅ Get enquiry by token
// export const getByToken = async (req, res) => {
//   try {
//     const { token } = req.params;

//     const enquiry = await membershipEnquiryService.getByToken(token);

//     if (!enquiry) {
//       return res.status(404).json({
//         success: false,
//         message: "Invalid token.",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       data: enquiry,
//     });

//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// membershipEnquiry.controller.js

import { v4 as uuidv4 } from "uuid";
import * as membershipEnquiryService from "../services/membershipEnquiry.service.js";
import { sendEmail } from "../services/email.service.js";
import membershipEmail from "../templates/membershipEmail.js";
import underReviewEmail from "../templates/underReviewEmail.js";
import sepaConsentEmail from "../templates/sepaConsentEmail.js";
import sepaConsentReceivedEmail from "../templates/sepaConsentReceivedEmail.js";
import changesRequestedEmail from "../templates/changesRequestedEmail.js";
import memberApprovedEmail from "../templates/memberApprovedEmail.js";
import * as membershipService from "../services/membership.service.js"; 
import * as artistService from "../services/artist.service.js";
import * as teamService from "../services/team.service.js";

import profileVisibilityEmail from "../templates/profileVisibilityEmail.js";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// ============================================
// GET ALL
// ============================================
export const getAll = async (req, res) => {
  try {
    const enquiries = await membershipEnquiryService.getAll();
    res.status(200).json({
      success: true,
      data: enquiries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ============================================
// GET BY ID
// ============================================
export const getById = async (req, res) => {
  try {
    const enquiry = await membershipEnquiryService.getById(req.params.id);

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Membership enquiry not found",
      });
    }

    res.status(200).json({
      success: true,
      data: enquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ============================================
// CREATE (Public - Membership Application)
// ============================================
export const create = async (req, res) => {
  try {
    // Handle file upload
    const photo = req.file?.filename || null;

    // Parse socialLinks if string (from FormData)
    let socialLinks = req.body.socialLinks;
    if (typeof socialLinks === "string") {
      try {
        socialLinks = JSON.parse(socialLinks);
      } catch (e) {
        socialLinks = null;
      }
    }

    // Handle dateOfBirth
    const dateOfBirth = req.body.dateOfBirth
      ? new Date(req.body.dateOfBirth)
      : null;

    const enquiryData = {
      fullName: req.body.fullName?.trim(),
      stageName: req.body.stageName?.trim() || null,
      email: req.body.email?.toLowerCase().trim(),
      mobile: req.body.mobile?.trim(),
      gender: req.body.gender || null,
      dateOfBirth: dateOfBirth,
      occupation: req.body.occupation?.trim() || null,
      biography: req.body.biography?.trim() || null,
      membershipType: req.body.membershipType || null,
      danceStyle: req.body.danceStyle || null,
      experience: req.body.experience?.trim() || null,
      address: req.body.address?.trim() || null,
      city: req.body.city?.trim() || null,
      state: req.body.state?.trim() || null,
      country: req.body.country || "Germany",
      postalCode: req.body.postalCode?.trim() || null,
      socialLinks: socialLinks,
      message: req.body.message?.trim() || null,
      photo: photo,
    };

    // Save enquiry
    const enquiry = await membershipEnquiryService.create(enquiryData);

    // Send confirmation email to applicant
    try {
      await sendEmail({
        to: enquiry.email,
        subject: "Membership Application Received - KITD Germany",
        html: membershipEmail(enquiry.fullName),
      });
      console.log("✅ Confirmation email sent to:", enquiry.email);
    } catch (emailError) {
      console.error("❌ Applicant Email Error:", emailError.message);
    }

    // Send notification to admin
    try {
      if (process.env.ADMIN_EMAIL) {
        await sendEmail({
          to: process.env.ADMIN_EMAIL,
          subject: `New Membership Application - ${enquiry.fullName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px;">
              <h2 style="color: #8B1E3F;">New Membership Application</h2>
              <div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
                <p><strong>Name:</strong> ${enquiry.fullName}</p>
                <p><strong>Stage Name:</strong> ${enquiry.stageName || 'N/A'}</p>
                <p><strong>Email:</strong> ${enquiry.email}</p>
                <p><strong>Phone:</strong> ${enquiry.mobile}</p>
                <p><strong>Membership Type:</strong> ${enquiry.membershipType || 'N/A'}</p>
                <p><strong>Dance Style:</strong> ${enquiry.danceStyle || 'N/A'}</p>
                <p><strong>City:</strong> ${enquiry.city || 'N/A'}</p>
                <p><strong>Country:</strong> ${enquiry.country || 'N/A'}</p>
                ${enquiry.biography ? `<p><strong>Biography:</strong> ${enquiry.biography.substring(0, 200)}...</p>` : ''}
              </div>
              <br/>
              <p style="color: #666;">Login to admin panel to review this application.</p>
            </div>
          `,
        });
        console.log("✅ Admin notification sent");
      }
    } catch (emailError) {
      console.error("❌ Admin Email Error:", emailError.message);
    }

    res.status(201).json({
      success: true,
      message: "Membership application submitted successfully",
      data: enquiry,
    });
  } catch (error) {
    console.error("❌ Create Enquiry Error:", error);

    if (error.code === "P2002") {
      return res.status(400).json({
        success: false,
        message: "An application with this email already exists.",
      });
    }

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ============================================
// UPDATE
// ============================================
export const update = async (req, res) => {
  try {
    const { id } = req.params;

    const existingEnquiry = await membershipEnquiryService.getById(id);
    if (!existingEnquiry) {
      return res.status(404).json({
        success: false,
        message: "Membership enquiry not found",
      });
    }

    const photo = req.file?.filename || existingEnquiry.photo;

    let socialLinks = req.body.socialLinks;
    if (typeof socialLinks === "string") {
      try {
        socialLinks = JSON.parse(socialLinks);
      } catch (e) {
        socialLinks = existingEnquiry.socialLinks;
      }
    }

    const dateOfBirth = req.body.dateOfBirth
      ? new Date(req.body.dateOfBirth)
      : existingEnquiry.dateOfBirth;

    const updateData = {
      fullName: req.body.fullName?.trim() || existingEnquiry.fullName,
      stageName: req.body.stageName !== undefined ? req.body.stageName?.trim() : existingEnquiry.stageName,
      email: req.body.email?.toLowerCase().trim() || existingEnquiry.email,
      mobile: req.body.mobile?.trim() || existingEnquiry.mobile,
      gender: req.body.gender !== undefined ? req.body.gender : existingEnquiry.gender,
      dateOfBirth: dateOfBirth,
      occupation: req.body.occupation !== undefined ? req.body.occupation?.trim() : existingEnquiry.occupation,
      biography: req.body.biography !== undefined ? req.body.biography?.trim() : existingEnquiry.biography,
      membershipType: req.body.membershipType || existingEnquiry.membershipType,
      danceStyle: req.body.danceStyle !== undefined ? req.body.danceStyle : existingEnquiry.danceStyle,
      experience: req.body.experience !== undefined ? req.body.experience?.trim() : existingEnquiry.experience,
      address: req.body.address !== undefined ? req.body.address?.trim() : existingEnquiry.address,
      city: req.body.city?.trim() || existingEnquiry.city,
      state: req.body.state !== undefined ? req.body.state?.trim() : existingEnquiry.state,
      country: req.body.country || existingEnquiry.country,
      postalCode: req.body.postalCode !== undefined ? req.body.postalCode?.trim() : existingEnquiry.postalCode,
      socialLinks: socialLinks,
      message: req.body.message !== undefined ? req.body.message?.trim() : existingEnquiry.message,
      photo: photo,
    };

    const enquiry = await membershipEnquiryService.update(id, updateData);

    res.status(200).json({
      success: true,
      message: "Membership enquiry updated successfully",
      data: enquiry,
    });
  } catch (error) {
    console.error("❌ Update Error:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ============================================
// UPDATE STATUS (Manual - No Email)
// ============================================
export const updateStatus = async (req, res) => {
  try {
    const enquiry = await membershipEnquiryService.updateStatus(
      req.params.id,
      req.body.status,
      req.body.remarks || null
    );

    res.status(200).json({
      success: true,
      message: "Status updated successfully",
      data: enquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ============================================
// STEP 1: START REVIEW → UNDER_REVIEW
// ============================================
export const startReview = async (req, res) => {
  try {
    const enquiry = await membershipEnquiryService.startReview(req.params.id);

    await sendEmail({
      to: enquiry.email,
      subject: "Your Membership Application is Under Review - KITD Germany",
      html: underReviewEmail(enquiry.fullName),
    });

    res.status(200).json({
      success: true,
      message: "Application moved to Under Review. Email sent to applicant.",
      data: enquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// export const sendSepaConsent = async (req, res) => {
//   try {
//     const token = uuidv4();
//     const expiry = new Date();
//     expiry.setDate(expiry.getDate() + 14); // 14 days validity

//     const enquiry = await membershipEnquiryService.sendSepaConsent(
//       req.params.id,
//       token,
//       expiry
//     );

//     // ✅ Use CLIENT_URL from environment variables
//     const sepaLink = `${process.env.CLIENT_URL}/sepa-consent/${token}`;

//     await sendEmail({
//       to: enquiry.email,
//       subject: "Complete Your SEPA Direct Debit Mandate - KITD Germany",
//       html: sepaConsentEmail(enquiry.fullName, sepaLink),
//     });

//     res.status(200).json({
//       success: true,
//       message: "SEPA consent form sent to member.",
//       data: enquiry,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// ============================================
// STEP 3: SUBMIT SEPA CONSENT (Public - Member)
// ============================================


export const sendSepaConsent = async (req, res) => {
  try {
    const token = uuidv4();
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 14); // 14 days validity

    const enquiry = await membershipEnquiryService.sendSepaConsent(
      req.params.id,
      token,
      expiry
    );

    const sepaLink = `${process.env.CLIENT_URL}/sepa-consent/${token}`;

    // ✅ Path to SEPA mandate PDF
    // const sepaMandatePath = path.join(__dirname, "..", "uploads", "documents", "sepa-mandate-form.pdf");
    // Use process.cwd() for reliable path
const sepaMandatePath = path.join(process.cwd(), "src", "uploads", "documents", "sepa-mandate-form.pdf");

    // Send email with SEPA mandate attachment
    await sendEmail({
      to: enquiry.email,
      subject: "Complete Your SEPA Direct Debit Mandate - KITD Germany",
      html: sepaConsentEmail(enquiry.fullName, sepaLink),
      attachments: [
        {
          filename: "SEPA-Mandate-Form-KITD.pdf",
          path: sepaMandatePath,
          contentType: "application/pdf",
        },
      ],
    });

    res.status(200).json({
      success: true,
      message: "SEPA consent form and mandate sent to member.",
      data: enquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const submitSepaConsent = async (req, res) => {
  try {
    const { token } = req.params;

    const enquiry = await membershipEnquiryService.getBySepaToken(token);

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Invalid SEPA consent link.",
      });
    }

    if (enquiry.sepaTokenExpiry && new Date(enquiry.sepaTokenExpiry) < new Date()) {
      return res.status(400).json({
        success: false,
        message: "SEPA consent link has expired. Please contact KITD.",
      });
    }

    const sepaConsentFile = req.file?.filename || null;

    const updatedEnquiry = await membershipEnquiryService.sepaConsentReceived(
      enquiry.id,
      {
        sepaConsentFile,
        iban: req.body.iban?.trim(),
        accountHolder: req.body.accountHolder?.trim(),
        bankName: req.body.bankName?.trim() || null,
      }
    );

    // Send confirmation to member
    await sendEmail({
      to: enquiry.email,
      subject: "SEPA Mandate Received - KITD Germany",
      html: sepaConsentReceivedEmail(enquiry.fullName),
    });

    // Notify admin
    if (process.env.ADMIN_EMAIL) {
      await sendEmail({
        to: process.env.ADMIN_EMAIL,
        subject: `SEPA Consent Received - ${enquiry.fullName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h2 style="color: #0d9488;">SEPA Mandate Received</h2>
            <div style="background: #f0fdfa; padding: 20px; border-radius: 8px; border: 1px solid #99f6e4;">
              <p><strong>Member:</strong> ${enquiry.fullName}</p>
              <p><strong>Email:</strong> ${enquiry.email}</p>
              <p><strong>IBAN:</strong> ${req.body.iban}</p>
              <p><strong>Account Holder:</strong> ${req.body.accountHolder}</p>
              <p><strong>Bank:</strong> ${req.body.bankName || 'N/A'}</p>
            </div>
            <br/>
            <p style="color: #666;">Status updated to SEPA_CONSENT_RECEIVED. Ready for final approval.</p>
          </div>
        `,
      });
    }

    return res.status(200).json({
      success: true,
      message: "SEPA consent submitted successfully! You will receive final approval soon.",
      data: updatedEnquiry,
    });
  } catch (error) {
    console.error("❌ SEPA Consent Error:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



export const approveMember = async (req, res) => {
  try {
    const memberId = `KITD-${new Date().getFullYear()}-${String(req.params.id).padStart(4, '0')}`;
    const member = await membershipEnquiryService.approve(req.params.id, memberId);

    const joinedDate = new Date();
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);

    const feeMap = { active: 50, supporting: 75, youth: 25 };
    const annualFee = feeMap[member.membershipType] || 50;

    // ✅ 1. Create Membership record
    const membershipData = {
      memberId, fullName: member.fullName, stageName: member.stageName, email: member.email,
      mobile: member.mobile, gender: member.gender, dateOfBirth: member.dateOfBirth,
      occupation: member.occupation, biography: member.biography, membershipType: member.membershipType,
      danceStyle: member.danceStyle, experience: member.experience, address: member.address,
      city: member.city, state: member.state, country: member.country, postalCode: member.postalCode,
      socialLinks: member.socialLinks, message: member.message, photo: member.photo,
      iban: member.iban, accountHolder: member.accountHolder, bankName: member.bankName,
      sepaMandateFile: member.sepaConsentFile, sepaMandateReference: `SEPA-${memberId}`,
      paymentStatus: "ACTIVE", joinedDate, expiryDate, annualFee, paymentDay: new Date().getDate(), isActive: true,
    };

    const membership = await membershipService.create(membershipData);
    console.log("✅ Membership created:", membership.memberId);

    // ✅ 2. Create Artist record (if they have a dance style)
    if (member.danceStyle) {
      try {
        await artistService.create({
          name: member.fullName,
          biography: member.biography || `${member.fullName} is a ${member.danceStyle} dancer from ${member.city || 'Germany'}.`,
          danceForm: member.danceStyle,
          city: member.city || "",
          image: member.photo || "",
          email: member.email,
          mobile: member.mobile,
          stageName: member.stageName || null,
          socialLinks: member.socialLinks || null,
          country: member.country || "Germany",
          state: member.state || null,
          experience: member.experience || null,
          isPublic: member.isPublic || false,  // ✅ Copy visibility from enquiry
        });
        console.log("✅ Artist created:", member.fullName, "| Public:", member.isPublic);
      } catch (artistError) {
        console.error("⚠️ Artist creation failed:", artistError.message);
      }
    }

    // ✅ 3. Create Team member (ALWAYS)
    try {
      await teamService.create({
        name: member.fullName,
        designation: member.membershipType || "Member",
        biography: member.biography || null,
        image: member.photo || "",
        email: member.email,
        level: "MEMBER",
        sortOrder: 99,
        isPublic: member.isPublic || false,  // ✅ Copy visibility from enquiry
        stageName: member.stageName || null,
        mobile: member.mobile || null,
        danceForm: member.danceStyle || null,
        city: member.city || null,
        country: member.country || null,
        socialLinks: member.socialLinks || null,
      });
      console.log("✅ Team member created:", member.fullName, "| Public:", member.isPublic);
    } catch (teamError) {
      console.error("⚠️ Team creation failed:", teamError.message);
    }

    // ✅ 4. Send approval email
    await sendEmail({
      to: member.email,
      subject: "🎉 Congratulations! Your KITD Membership is Approved!",
      html: memberApprovedEmail(
        member.fullName, memberId,
        expiryDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      ),
    });

    res.status(200).json({
      success: true,
      message: "Member approved! Membership, Artist & Team records created.",
      data: { enquiry: member, membership },
    });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ success: false, message: "Member already exists." });
    }
    res.status(500).json({ success: false, message: error.message });
  }
};

// ============================================
// REQUEST CHANGES (Any Stage)
// ============================================
export const requestChanges = async (req, res) => {
  try {
    const { remarks } = req.body;

    const enquiry = await membershipEnquiryService.requestChanges(
      req.params.id,
      remarks
    );

    await sendEmail({
      to: enquiry.email,
      subject: "Changes Required - KITD Membership Application",
      html: changesRequestedEmail(enquiry.fullName, remarks),
    });

    res.status(200).json({
      success: true,
      message: "Change request sent to applicant.",
      data: enquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ============================================
// DELETE
// ============================================
export const remove = async (req, res) => {
  try {
    await membershipEnquiryService.remove(req.params.id);

    res.status(200).json({
      success: true,
      message: "Membership enquiry deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ============================================
// VALIDATE SEPA TOKEN (Public)
// ============================================
export const validateSepaToken = async (req, res) => {
  try {
    const { token } = req.params;

    const enquiry = await membershipEnquiryService.getBySepaToken(token);

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Invalid SEPA consent link.",
      });
    }

    if (enquiry.sepaTokenExpiry && new Date(enquiry.sepaTokenExpiry) < new Date()) {
      return res.status(400).json({
        success: false,
        message: "SEPA consent link has expired.",
      });
    }

    return res.status(200).json({
      success: true,
      data: enquiry,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const sendProfileVisibility = async (req, res) => {
  try {
    const token = uuidv4();
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 14);

    const enquiry = await membershipEnquiryService.sendProfileVisibility(
      req.params.id, token, expiry
    );

    const profileLink = `${process.env.CLIENT_URL}/profile-visibility/${token}`;

    await sendEmail({
      to: enquiry.email,
      subject: "Complete Your Public Profile - KITD Germany",
      html: profileVisibilityEmail(enquiry.fullName, profileLink),
    });

    res.status(200).json({
      success: true,
      message: "Profile visibility email sent.",
      data: enquiry,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const submitProfileVisibility = async (req, res) => {
  try {
    const { token } = req.params;
    const enquiry = await membershipEnquiryService.getByProfileToken(token);

    if (!enquiry) return res.status(404).json({ success: false, message: "Invalid link." });
    if (enquiry.profileTokenExpiry && new Date(enquiry.profileTokenExpiry) < new Date()) {
      return res.status(400).json({ success: false, message: "Link expired." });
    }

    // Only update visibility
    const isPublic = req.body.isPublic === "true" || req.body.isPublic === true;

    const updated = await membershipEnquiryService.profileCompleted(enquiry.id, {
      isPublic: isPublic,
    });

    res.status(200).json({
      success: true,
      message: `Profile is now ${isPublic ? "Public" : "Private"}`,
      data: updated,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// ✅ VALIDATE PROFILE TOKEN
export const validateProfileToken = async (req, res) => {
  try {
    const enquiry = await membershipEnquiryService.getByProfileToken(req.params.token);
    if (!enquiry) return res.status(404).json({ success: false, message: "Invalid link." });
    if (enquiry.profileTokenExpiry && new Date(enquiry.profileTokenExpiry) < new Date()) {
      return res.status(400).json({ success: false, message: "Link expired." });
    }
    res.status(200).json({ success: true, data: enquiry });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};