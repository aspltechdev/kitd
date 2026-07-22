import express from "express";
import * as dashboardController from "../controllers/dashboard.controller.js";
import authMiddleware  from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = express.Router();

router.get(
  "/",
  authMiddleware,
  authorize("ADMIN"),
  dashboardController.getDashboard
);

export default router;