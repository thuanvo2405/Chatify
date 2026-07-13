import type { NextFunction, Request, Response } from "express";

const signup = async (req: Request, res: Response, next: NextFunction) => {
  res.json({ status: "processing" });
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
