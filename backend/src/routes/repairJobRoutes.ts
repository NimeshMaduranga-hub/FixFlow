
import { Router } from "express";

import {
    createRepairJob,
    getAllRepairJobs,
    getRepairJobById,
    updateRepairJob,
    deleteRepairJob
} from "../controllers/repairJobController.js";

import {
    protect,
    adminOnly
} from "../middleware/authMiddleware.js";

const router = Router();

// Create Repair Job - Admin Only
router.post("/", protect, adminOnly, createRepairJob);

// Get All Repair Jobs - Logged-in Users
router.get("/", protect, getAllRepairJobs);

// Get Repair Job By ID - Logged-in Users
router.get("/:id", protect, getRepairJobById);

// Update Repair Job - Admin Only
router.put("/:id", protect, adminOnly, updateRepairJob);

// Delete Repair Job - Admin Only
router.delete("/:id", protect, adminOnly, deleteRepairJob);

export default router;
