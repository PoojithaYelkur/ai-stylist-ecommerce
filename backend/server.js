import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

// connect database
connectDB();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Backend running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});