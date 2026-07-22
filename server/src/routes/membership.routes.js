import express from "express";
import * as membershipController from "../controllers/membership.controller.js";
import  authMiddleware  from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = express.Router();

// =======================
// Public Route
// =======================

// Submit Membership Application
router.post("/", membershipController.create);

// =======================
// Protected Routes (Admin)
// =======================

// Get all membership applications
router.get(
  "/",
  authMiddleware,
  authorize("ADMIN"),
  membershipController.getAll
);

// Get membership application by ID
router.get(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  membershipController.getById
);

// Update membership application
router.put(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  membershipController.update
);

// Delete membership application
router.delete(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  membershipController.remove
);

export default router;