import express from "express";
import * as galleryController from "../controllers/gallery.controller.js";
import authMiddleware  from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";
import { upload } from "../middleware/upload.middleware.js";
const router = express.Router();

// =======================
// Public Routes
// =======================

// Get all gallery items
router.get("/", galleryController.getAll);

// Get gallery item by ID
router.get("/:id", galleryController.getById);

// =======================
// Protected Routes (Admin)
// =======================

// Create gallery item
router.post(
  "/",
  authMiddleware,
  authorize("ADMIN"),
    upload("gallery").single("image"),
  galleryController.create
);

// Update gallery item
router.put(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
   upload("gallery").single("image"),
  galleryController.update
);

// Delete gallery item
router.delete(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  galleryController.remove
);

export default router;