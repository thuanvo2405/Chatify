import type { NextFunction, Request, Response } from "express";
import { type User as UserType } from "../types/user.js";
import User from "../models/userModel.js";

const signup = async (
  req: Request<
    {},
    unknown,
    Pick<UserType, "username" | "email" | "password">,
    {}
  >,
  res: Response,
  next: NextFunction,
) => {
  const { username, email, password } = req.body;

  const newUser = await User.create({
    username,
    email,
    password,
  });

  res.json({
    status: "success",
    message: "User created successfully. Please log in to continue.",
  });
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  res.json({ status: "processing" });
};

const logout = async (req: Request, res: Response, next: NextFunction) => {
  res.json({ status: "processing" });
};

export default {
  signup,
  login,
  logout,
};
