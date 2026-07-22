import express from "express";
import {
  login,
  getProfile,
  logout,
} from "../controllers/auth.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

/**
 * Authentication Routes
 */

// Login
router.post("/login", login);

// Get Logged In User
router.get("/me", authMiddleware, getProfile);

// Logout
router.post("/logout", authMiddleware, logout);

export default router;