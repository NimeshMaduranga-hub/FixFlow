
import express from "express";
import cors from "cors";

import connectDB from "./config/database.js";
import authRoutes from "./routes/authRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";
import repairJobRoutes from "./routes/repairJobRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Request Logger
app.use((req, res, next) => {
    console.log("INCOMING REQUEST:", req.method, req.url);
    next();
});

// Authentication API Routes
app.use("/api/auth", authRoutes);

// Customer API Routes
app.use("/api/customers", customerRoutes);

// Repair Job API Routes
app.use("/api/repair-jobs", repairJobRoutes);

// Direct Repair Test
app.get("/repair-test", (req, res) => {
    res.send("Main Server is Working!");
});

// Welcome API
app.get("/", (req, res) => {
    res.send("Welcome to FixFlow API!");
});

// Server Port
const PORT = process.env.PORT || 5000;

// Start Server
const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`FixFlow Server running on port ${PORT}`);
    });
};

startServer();
