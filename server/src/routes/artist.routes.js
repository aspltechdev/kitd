import express from "express";
import * as artistController from "../controllers/artist.controller.js";
import  authMiddleware  from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = express.Router();

// =======================
// Public Routes
// =======================

// Get all artists
router.get("/", artistController.getAll);

// Get artist by ID
router.get("/:id", artistController.getById);

// =======================
// Protected Routes (Admin)
// =======================

// Create artist
router.post(
  "/",
  authMiddleware,
  authorize("ADMIN"),
  artistController.create
);

// Update artist
router.put(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  artistController.update
);

// Delete artist
router.delete(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  artistController.remove
);

export default router;