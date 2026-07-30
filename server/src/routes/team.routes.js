// import express from "express";
// import * as teamController from "../controllers/team.controller.js";
// import  authMiddleware  from "../middleware/auth.middleware.js";
// import { authorize } from "../middleware/role.middleware.js";
// import { upload } from "../middleware/upload.middleware.js";
// const router = express.Router();

// // =======================
// // Public Routes
// // =======================

// // Get all team members
// router.get("/", teamController.getAll);

// // Get team member by ID
// router.get("/:id", teamController.getById);

// // =======================
// // Protected Routes (Admin)
// // =======================

// // Create team member
// // router.post(
// //   "/",
// //   authMiddleware,
// //   authorize("ADMIN"),
// //   teamController.create
// // );


// router.post(
//   "/",
//   authMiddleware,
//   authorize("ADMIN"),
//   upload("team").single("image"),
//   teamController.create
// );

// // Update team member

// // router.put(
// //   "/:id",
// //   authMiddleware,
// //   authorize("ADMIN"),
// //   teamController.update
// // );

// router.put(
//   "/:id",
//   authMiddleware,
//   authorize("ADMIN"),
//   upload("team").single("image"),
//   teamController.update
// );

// // Delete team member
// router.delete(
//   "/:id",
//   authMiddleware,
//   authorize("ADMIN"),
//   teamController.remove
// );

// export default router;

import express from "express";
import * as teamController from "../controllers/team.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

// =======================
// Public Routes (No Auth)
// =======================

// ✅ Get public team for website (hierarchical: boardOfDirectors + members)
router.get("/public", teamController.getPublic);

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
  upload("team").single("image"),
  teamController.create
);

// Update team member
router.put(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  upload("team").single("image"),
  teamController.update
);

// ✅ Toggle visibility (Public/Hidden)
router.patch(
  "/:id/toggle-visibility",
  authMiddleware,
  authorize("ADMIN"),
  teamController.toggleVisibility
);

// Delete team member
router.delete(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  teamController.remove
);

export default router;