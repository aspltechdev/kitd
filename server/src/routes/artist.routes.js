// // import express from "express";
// // import * as artistController from "../controllers/artist.controller.js";
// // import  authMiddleware  from "../middleware/auth.middleware.js";
// // import { authorize } from "../middleware/role.middleware.js";
// // import { upload } from "../middleware/upload.middleware.js";

// // const router = express.Router();

// // // =======================
// // // Public Routes
// // // =======================

// // // Get all artists
// // router.get("/", artistController.getAll);

// // // Get artist by ID
// // router.get("/:id", artistController.getById);

// // // =======================
// // // Protected Routes (Admin)
// // // =======================

// // // Create artist
// // // router.post(
// // //   "/",
// // //   authMiddleware,
// // //   authorize("ADMIN"),
// // //   artistController.create
// // // );

// // router.post(
// //   "/",
// //   authMiddleware,
// //   authorize("ADMIN"),
// //   upload("artists").single("image"),
// //   artistController.create
// // );

// // // Update artist
// // router.put(
// //   "/:id",
// //   authMiddleware,
// //   authorize("ADMIN"),
// //   upload("artists").single("image"),
// //   artistController.update
// // );

// // // Delete artist
// // router.delete(
// //   "/:id",
// //   authMiddleware,
// //   authorize("ADMIN"),
// //   artistController.remove
// // );

// // export default router;



// import express from "express";
// import * as artistController from "../controllers/artist.controller.js";
// import authMiddleware from "../middleware/auth.middleware.js";
// import { authorize } from "../middleware/role.middleware.js";
// import { upload } from "../middleware/upload.middleware.js";

// const router = express.Router();

// // =======================
// // Public Routes (No Auth)
// // =======================

// // ✅ Get PUBLIC artists for website (only isPublic: true)
// router.get("/public", artistController.getPublic);

// // Get all artists (admin panel)
// router.get("/", artistController.getAll);

// // Get artist by ID
// router.get("/:id", artistController.getById);

// // =======================
// // Protected Routes (Admin Only)
// // =======================

// // Create artist
// router.post(
//   "/",
//   authMiddleware,
//   authorize("ADMIN"),
//   upload("artists").single("image"),
//   artistController.create
// );

// // Update artist
// router.put(
//   "/:id",
//   authMiddleware,
//   authorize("ADMIN"),
//   upload("artists").single("image"),
//   artistController.update
// );

// // ✅ Toggle artist visibility (Public/Hidden)
// router.patch(
//   "/:id/toggle-visibility",
//   authMiddleware,
//   authorize("ADMIN"),
//   artistController.toggleVisibility
// );

// // Delete artist
// router.delete(
//   "/:id",
//   authMiddleware,
//   authorize("ADMIN"),
//   artistController.remove
// );

// export default router;


import express from "express";
import * as artistController from "../controllers/artist.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

// =======================
// Public Routes (No Auth)
// =======================

router.get("/public", artistController.getPublic);
router.get("/", artistController.getAll);
router.get("/:id", artistController.getById);

// =======================
// Protected Routes (Admin Only)
// =======================

// Create artist
router.post(
  "/",
  authMiddleware,
  authorize("ADMIN"),
  upload("artists").single("photo"),  // ✅ Changed from "image" to "photo"
  artistController.create
);

// Update artist
router.put(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  upload("artists").single("photo"),  // ✅ Changed from "image" to "photo"
  artistController.update
);

// Toggle artist visibility
router.patch(
  "/:id/toggle-visibility",
  authMiddleware,
  authorize("ADMIN"),
  artistController.toggleVisibility
);

// Delete artist
router.delete(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  artistController.remove
);

export default router;