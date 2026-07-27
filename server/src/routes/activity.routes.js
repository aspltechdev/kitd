import express from "express";
import * as activityController from "../controllers/activity.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

// =======================
// Public Routes
// =======================

// Get all activities
router.get("/", activityController.getAll);

// Get activity by ID
router.get("/:id", activityController.getById);

// =======================
// Protected Routes (Admin)
// =======================

// Create activity
// router.post(
//   "/",
//   authMiddleware,
//   authorize("ADMIN"),
//   activityController.create
// );

// // Update activity
// router.put(
//   "/:id",
//   authMiddleware,
//   authorize("ADMIN"),
//   activityController.update
// );


router.post(
  "/",
  authMiddleware,
  authorize("ADMIN"),
  upload("activities").single("image"), // or the correct field name
  activityController.create
);

router.put(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  upload("activities").single("image"),
  activityController.update
);


// Delete activity
router.delete(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  activityController.remove
);

export default router;