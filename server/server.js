import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js";

dotenv.config();

// Connect Database
connectDB();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://studentms-frontend-opal.vercel.app",
    ],
  }),
);
app.use(express.json());
app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Student Management API Running 🚀",
  });
});

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

export default app;
