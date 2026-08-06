// import express from "express";
// import * as membershipEnquiryController from "../controllers/membershipEnquiry.controller.js";

// const router = express.Router();

// // Public
// router.post("/", membershipEnquiryController.create);

// // Admin
// router.get("/", membershipEnquiryController.getAll);

// router.get("/:id", membershipEnquiryController.getById);

// router.patch("/:id/status", membershipEnquiryController.updateStatus);

// router.post("/:id/approve", membershipEnquiryController.approve);

// router.delete("/:id", membershipEnquiryController.remove);

// export default router;


// import express from "express";
// import * as membershipEnquiryController from "../controllers/membershipEnquiry.controller.js";
// import { upload } from "../middleware/upload.middleware.js";

// const router = express.Router();

// // Public
// router.post(
//   "/",
//   upload("memberships").single("photo"),
//   membershipEnquiryController.create
// );

// // Admin
// router.get("/", membershipEnquiryController.getAll);
// router.get("/:id", membershipEnquiryController.getById);
// router.patch("/:id/status", membershipEnquiryController.updateStatus);
// router.post("/:id/approve", membershipEnquiryController.approve);
// router.delete("/:id", membershipEnquiryController.remove);

// router.patch("/:id/start-review", membershipEnquiryController.startReview);

// router.patch("/:id/send-registration", membershipEnquiryController.sendRegistrationForm);

// router.patch("/:id/request-changes", membershipEnquiryController.requestChanges);

// router.patch("/:id/approve-member", membershipEnquiryController.approveMember);


// router.get(
//   "/token/:token",
//   membershipEnquiryController.validateRegistrationToken
// );

// export default router;


import express from "express";
import * as membershipEnquiryController from "../controllers/membershipEnquiry.controller.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

// ============================================
// PUBLIC ROUTES (No Authentication Required)
// ============================================

// Submit membership application (with photo upload)
router.post(
  "/",
  upload("memberships").single("photo"),
  membershipEnquiryController.create
);

// Validate SEPA consent token (for member's SEPA form page)
router.get(
  "/sepa-token/:token",
  membershipEnquiryController.validateSepaToken
);

// Submit SEPA consent (member submits IBAN, account holder, bank details)
router.post(
  "/sepa-consent/:token",
  upload("sepa-consent").single("sepaConsentFile"),
  membershipEnquiryController.submitSepaConsent
);

// ============================================
// ADMIN ROUTES (Add Authentication Middleware)
// ============================================

// Get all membership enquiries
router.get("/", membershipEnquiryController.getAll);

// Get single membership enquiry by ID
router.get("/:id", membershipEnquiryController.getById);

// Update enquiry details
router.put(
  "/:id",
  upload("memberships").single("photo"),
  membershipEnquiryController.update
);

// Manual status update (No email sent)
router.patch("/:id/status", membershipEnquiryController.updateStatus);

// ============================================
// WORKFLOW ACTIONS (Each sends specific email)
// ============================================

// Step 1: Start Review → UNDER_REVIEW (Sends "Under Review" email)
router.patch(
  "/:id/start-review",
  membershipEnquiryController.startReview
);

// Step 2: Send SEPA Consent → SEPA_CONSENT_SENT (Sends SEPA mandate email with link)
router.patch(
  "/:id/send-sepa-consent",
  membershipEnquiryController.sendSepaConsent
);

// Step 3: [Member submits SEPA via public route above]

// Step 4: Final Approval → APPROVED (Sends congratulations email with Member ID)
router.patch(
  "/:id/approve",
  membershipEnquiryController.approveMember
);

// Request Changes (Any stage - Sends "Changes Required" email)
router.patch(
  "/:id/request-changes",
  membershipEnquiryController.requestChanges
);

// Delete enquiry
router.delete("/:id", membershipEnquiryController.remove);


// routes/membershipEnquiry.routes.js

// Profile Visibility
router.patch("/:id/send-profile-visibility", membershipEnquiryController.sendProfileVisibility);
router.get("/profile-token/:token", membershipEnquiryController.validateProfileToken);
router.post("/profile-visibility/:token", upload("profile-photos").single("photo"), membershipEnquiryController.submitProfileVisibility);
export default router;