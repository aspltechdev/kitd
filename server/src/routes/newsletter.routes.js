// import express from "express";
// import * as newsController from "../controllers/news.controller.js";
// import { authMiddleware } from "../middleware/auth.middleware.js";
// import { authorize } from "../middleware/role.middleware.js";

// const router = express.Router();

// // =======================
// // Public Routes
// // =======================

// // Get all news
// router.get("/", newsController.getAll);

// // Get news by ID
// router.get("/:id", newsController.getById);

// // =======================
// // Protected Routes (Admin)
// // =======================

// // Create news
// router.post(
//   "/",
//   authMiddleware,
//   authorize("ADMIN"),
//   newsController.create
// );

// // Update news
// router.put(
//   "/:id",
//   authMiddleware,
//   authorize("ADMIN"),
//   newsController.update
// );

// // Delete news
// router.delete(
//   "/:id",
//   authMiddleware,
//   authorize("ADMIN"),
//   newsController.remove
// );

// export default router;


import express from "express";
import * as newsletterController from "../controllers/newsletter.controller.js";
import  authMiddleware  from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = express.Router();

// =======================
// Public Route
// =======================

// Subscribe to newsletter
router.post("/", newsletterController.subscribe);

// =======================
// Protected Routes (Admin)
// =======================

// Get all subscribers
router.get(
  "/",
  authMiddleware,
  authorize("ADMIN"),
  newsletterController.getAll
);

// Get subscriber by ID
router.get(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  newsletterController.getById
);

// Update subscriber
router.put(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  newsletterController.update
);

// Delete subscriber
router.delete(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  newsletterController.remove
);

export default router;