import express from "express";
import * as partnerController from "../controllers/partner.controller.js";
import  authMiddleware  from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = express.Router();

// Public Routes
router.get("/", partnerController.getAll);
router.get("/:id", partnerController.getById);

// Protected Routes
router.post(
  "/",
  authMiddleware,
  authorize("ADMIN"),
  partnerController.create
);

router.put(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  partnerController.update
);

router.delete(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  partnerController.remove
);

export default router;