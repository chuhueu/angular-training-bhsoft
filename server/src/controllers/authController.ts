import { Request, Response } from "express";

const User = require("../models/userModel");

const register = async (req: Request, res: Response) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    !user && res.status(401).json("Wrong password or username!");

    if (user && user.password === password) {
      res.status(200).json(user);
    } else {
      res.status(401).json("Sai tài khoản hoặc mật khẩu");
      throw new Error("Sai tài khoản hoặc mật khẩu");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export { register, login };
