const express = require("express");
const colors = require("colors");
const cookieParser = require("cookie-parser");
const path = require("path");
const cloudinary = require("cloudinary");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectDatabase } = require("./config/database.js");
const userRouter = require("./routes/User.js");
const app = express();
dotenv.config();
connectDatabase();
app.use(cors());

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(express.json());
// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.use("/api/v1", userRouter);

//hosting

app.use(express.static(path.join("./client/dist")));

app.get("*", (_, res) => {
  res.sendFile(path.join("./client/dist/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT}`.cyan.bold,
  );
});
