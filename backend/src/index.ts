import express, { NextFunction, Response, Request } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";
import AppError from "./utils/appError.js";
import globalErrorHandler from "./controllers/errorController.js";

dotenv.config();

const app = express();
app.use(express.json());

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

app.all("/{*splat}", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
