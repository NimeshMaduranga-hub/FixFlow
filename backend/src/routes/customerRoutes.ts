
import { Router } from "express";

import {
    createCustomer,
    getAllCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
} from "../controllers/customerController.js";

import {
    protect,
    adminOnly
} from "../middleware/authMiddleware.js";

const router = Router();

// Create Customer - Admin Only
router.post("/", protect, adminOnly, createCustomer);

// Get All Customers - Logged-in Users
router.get("/", protect, getAllCustomers);

// Get Customer By ID - Logged-in Users
router.get("/:id", protect, getCustomerById);

// Update Customer - Admin Only
router.put("/:id", protect, adminOnly, updateCustomer);

// Delete Customer - Admin Only
router.delete("/:id", protect, adminOnly, deleteCustomer);

export default router;
