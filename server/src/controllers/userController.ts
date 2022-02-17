import { Request, Response } from "express";

const User = require("../models/userModel");

const getUser = async (req: Request, res: Response) => {
  try {
    const get = await User.find();
    res.status(200).json(get);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { getUser };
