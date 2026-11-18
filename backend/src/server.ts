
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Welcome API
app.get("/", (req, res) => {
    res.send("Welcome to FixFlow API!");
});

// Server Port
const PORT = 5000;

// Start Server
app.listen(PORT, () => {
    console.log(`FixFlow Server running on port ${PORT}`);
});
