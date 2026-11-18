
import express from "express";
import cors from "cors";
import connectDB from "./config/database.js";

const app = express();

app.use(cors());
app.use(express.json());

// Welcome API
app.get("/", (req, res) => {
    res.send("Welcome to FixFlow API!");
});

// Server Port
const PORT = process.env.PORT || 5000;

// Start Server after Database Connection
const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`FixFlow Server running on port ${PORT}`);
    });
};

startServer();
