import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

if (!process.env.DATABASE || !process.env.DATABASE_PASSWORD) {
  throw new Error("Database environment variables are missing");
}

const DB = process.env.DATABASE.replace(
  "<db_password>",
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB)
  .then(() => {
    console.log(`DB connect successful`);
  })
  .catch((err) => {
    console.error(err);
  });

app.use("/api/v1/users", userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
