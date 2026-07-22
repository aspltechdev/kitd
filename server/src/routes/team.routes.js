import express from "express";
import * as teamController from "../controllers/team.controller.js";
import  authMiddleware  from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = express.Router();

// =======================
// Public Routes
// =======================

// Get all team members
router.get("/", teamController.getAll);

// Get team member by ID
router.get("/:id", teamController.getById);

// =======================
// Protected Routes (Admin)
// =======================

// Create team member
router.post(
  "/",
  authMiddleware,
  authorize("ADMIN"),
  teamController.create
);

// Update team member
router.put(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  teamController.update
);

// Delete team member
router.delete(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  teamController.remove
);

export default router;