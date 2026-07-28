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


import express from "express";
import * as membershipEnquiryController from "../controllers/membershipEnquiry.controller.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

// Public
router.post(
  "/",
  upload("memberships").single("photo"),
  membershipEnquiryController.create
);

// Admin
router.get("/", membershipEnquiryController.getAll);
router.get("/:id", membershipEnquiryController.getById);
router.patch("/:id/status", membershipEnquiryController.updateStatus);
router.post("/:id/approve", membershipEnquiryController.approve);
router.delete("/:id", membershipEnquiryController.remove);

router.patch("/:id/start-review", membershipEnquiryController.startReview);

router.patch("/:id/send-registration", membershipEnquiryController.sendRegistrationForm);

router.patch("/:id/request-changes", membershipEnquiryController.requestChanges);

router.patch("/:id/approve-member", membershipEnquiryController.approveMember);


router.get(
  "/token/:token",
  membershipEnquiryController.validateRegistrationToken
);

export default router;