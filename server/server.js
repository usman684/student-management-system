import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://studentms-frontend-opal.vercel.app",
    ],
    credentials: true,
  }),
);

app.use(express.json());

// ✅ Ensure DB connection before every request
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: "Database connection failed" });
  }
});

app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Student Management API Running 🚀",
  });
});

export default app;
