import express from "express";

import * as volunteerController from "../controllers/volunteerRegistration.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Public Route
|--------------------------------------------------------------------------
*/

router.post("/", volunteerController.create);

/*
|--------------------------------------------------------------------------
| Protected Routes
|--------------------------------------------------------------------------
*/

router.get("/", authenticate, volunteerController.getAll);

router.get("/:id", authenticate, volunteerController.getById);

router.patch(
  "/:id/status",
  authenticate,
  volunteerController.updateStatus
);

router.delete(
  "/:id",
  authenticate,
  volunteerController.remove
);

export default router;