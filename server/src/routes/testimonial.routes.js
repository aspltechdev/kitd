import express from "express";
import * as testimonialController from "../controllers/testimonial.controller.js";
import  authMiddleware  from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = express.Router();

// =======================
// Public Routes
// =======================

router.get("/", testimonialController.getAll);
router.get("/:id", testimonialController.getById);

// =======================
// Protected Routes (Admin)
// =======================

router.post(
  "/",
  authMiddleware,
  authorize("ADMIN"),
  testimonialController.create
);

router.put(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  testimonialController.update
);

router.delete(
  "/:id",
  authMiddleware,
 authorize("ADMIN"),
  testimonialController.remove
);

export default router;