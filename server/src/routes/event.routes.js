import express from "express";
import * as eventController from "../controllers/event.controller.js";
import  authMiddleware  from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = express.Router();

// =======================
// Public Routes
// =======================

// Get all events
router.get("/", eventController.getAll);

// Get event by ID
router.get("/:id", eventController.getById);

// =======================
// Protected Routes (Admin)
// =======================

// Create event
router.post(
  "/",
  authMiddleware,
  authorize("ADMIN"),
  eventController.create
);

// Update event
router.put(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  eventController.update
);

// Delete event
router.delete(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  eventController.remove
);

export default router;