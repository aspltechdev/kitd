import express from "express";
import * as contactController from "../controllers/contact.controller.js";
import  authMiddleware  from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = express.Router();

// =======================
// Public Route
// =======================

// Submit Contact Form
router.post("/", contactController.create);

// =======================
// Protected Routes (Admin)
// =======================

// Get all contact inquiries
router.get(
  "/",
  authMiddleware,
  authorize("ADMIN"),
  contactController.getAll
);

// Get contact inquiry by ID
router.get(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  contactController.getById
);

// Update contact inquiry
router.put(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  contactController.update
);

// Delete contact inquiry
router.delete(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  contactController.remove
);

export default router;