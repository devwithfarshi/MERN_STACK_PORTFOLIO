import express from "express";
import colors from "colors";
import cookieParser from "cookie-parser";
import path from "path";
import cloudinary from "cloudinary";

const app = express();
import dotenv from "dotenv";
import cors from "cors";
import { connectDatabase } from "./config/database.js";
import { userRouter } from "./routes/User.js";

dotenv.config();
connectDatabase();
app.use(cors());

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.use("/api/v1", userRouter);

app.use(express.static(path.join(__dirname, "client", "dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT}`.cyan.bold,
  );
});
