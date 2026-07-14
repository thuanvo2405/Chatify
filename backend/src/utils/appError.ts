export interface AppErrorType extends Error {
  statusCode?: number;
  status?: "fail" | "error";
  code?: number;
  errmsg?: string;
}

export default class AppError extends Error {
  status: "fail" | "error";
  isOperational = true;

  constructor(
    message: string,
    public statusCode: number,
  ) {
    super(message);

    this.status = statusCode < 500 ? "fail" : "error";

    Error.captureStackTrace(this, this.constructor);
  }
}
