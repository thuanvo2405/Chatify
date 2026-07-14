import { Request, Response, NextFunction } from "express";
import AppError, { AppErrorType } from "../utils/appError.js";

const handleDuplicateFieldsDB = (err: AppErrorType): AppError => {
  const value = err.errmsg?.match(/(["'])(\\?.)*?\1/)?.[0] ?? "";

  const message = `Duplicate field value: ${value}. Please use another value!`;

  return new AppError(message, 400);
};

const sendErrorDev = (err: AppErrorType, req: Request, res: Response) => {
  return res.status(err.statusCode ?? 500).json({
    error: err,
    status: err.status,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err: AppErrorType, req: Request, res: Response) => {
  return res.status(err.statusCode ?? 500).json({
    status: err.status,
    message: err.message,
  });
};

export default (
  err: AppErrorType,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  err.status ||= "error";
  err.statusCode ||= 500;

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === "production") {
    let error: AppErrorType = err;
    console.log(error);

    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    sendErrorProd(error, req, res);
  }
};
