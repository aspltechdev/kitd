import express from "express";
import * as membershipEnquiryController from "../controllers/membershipEnquiry.controller.js";

const router = express.Router();

// Public
router.post("/", membershipEnquiryController.create);

// Admin
router.get("/", membershipEnquiryController.getAll);

router.get("/:id", membershipEnquiryController.getById);

router.patch("/:id/status", membershipEnquiryController.updateStatus);

router.post("/:id/approve", membershipEnquiryController.approve);

router.delete("/:id", membershipEnquiryController.remove);

export default router;