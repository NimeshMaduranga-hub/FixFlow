
import { Router } from "express";

import {
    registerUser,
    loginUser,
    refreshAccessToken,
    logoutUser,
    getMyDetails
} from "../controllers/authController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = Router();

// Get Logged-in User Details
router.get("/me", protect, getMyDetails);
// Register User
router.post("/register", registerUser);

// Login User
router.post("/login", loginUser);

// Refresh Access Token
router.post("/refresh", refreshAccessToken);

// Logout User
router.post("/logout", logoutUser);

export default router;
