import express from "express";
import * as newsController from "../controllers/news.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

// Public Routes
router.get("/", newsController.getAll);
router.get("/:id", newsController.getById);

// Admin Routes
router.post(
  "/",
  authMiddleware,
  authorize("ADMIN"),
  upload("news").single("image"),
  newsController.create
);

router.put(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  upload("news").single("image"),
  newsController.update
);

router.delete(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  newsController.remove
);

export default router;