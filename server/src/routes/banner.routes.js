// import express from "express";
// import {
//   getAllBanners,
//   getBannerById,
//   createBanner,
//   updateBanner,
//   deleteBanner,
//   toggleBannerStatus,
// } from "../controllers/banner.controller.js";

// import  authenticate  from "../middleware/auth.middleware.js";
// import { authorize } from "../middleware/role.middleware.js";
// import { upload } from "../middleware/upload.middleware.js";

// const router = express.Router();

// /**
//  * Public Routes
//  */

// // Get all active banners
// router.get("/", getAllBanners);

// // Get banner by ID
// router.get("/:id", getBannerById);

// /**
//  * Protected Routes (Admin Only)
//  */

// // Create Banner
// router.post(
//   "/",
//   authenticate,
//   authorize("ADMIN"),
//   upload.single("media"),
//   createBanner
// );

// // Update Banner
// router.put(
//   "/:id",
//   authenticate,
//   authorize("ADMIN"),
//   upload.single("media"),
//   updateBanner
// );

// // Delete Banner
// router.delete(
//   "/:id",
//   authenticate,
//   authorize("ADMIN"),
//   deleteBanner
// );

// // Toggle Banner Status
// router.patch(
//   "/:id/status",
//   authenticate,
//   authorize("ADMIN"),
//   toggleBannerStatus
// );

// export default router;

import express from "express";
import {
  getAllBanners,
  getBannerById,
  createBanner,
  updateBanner,
  deleteBanner,
  toggleBannerStatus,
} from "../controllers/banner.controller.js";

import  authenticate  from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

router.get("/", getAllBanners);
router.get("/:id", getBannerById);

router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  upload("banners").single("media"),
  createBanner
);

router.put(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  upload("banners").single("media"),
  updateBanner
);

router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  deleteBanner
);

router.patch(
  "/:id/status",
  authenticate,
  authorize("ADMIN"),
  toggleBannerStatus
);

export default router;