// Sigin user

import { NextFunction, Request, Response } from "express";
import User, { UserI } from "../models/User";
import Bcrypt from "bcryptjs";

const ObjectID = require("mongodb").ObjectID;

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users: UserI[] = await User.find().select("");
    return res.status(200).json({ data: users });
  } catch (err: any) {
    res.status(500).send(err.toString());
  }
};

export const getUserDetail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let { id } = req.params;
    const user = await User.find({ _id: new ObjectID(id) });

    if (!user) {
      return res.status(400).json({
        data: "User doesn't exist",
      });
    }
    return res.status(200).json({ data: user });
  } catch (error: any) {
    return res.status(404).json({ data: error.message });
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { username, password, firstName, lastName } = req.body;
  const user: UserI = new User({
    username,
    password,
    firstName,
    lastName,
  });

  try {
    const exists = await User.findOne({ username });
    if (exists) {
      return res.status(442).send("The username already exisits");
    }
    if (password.length < 8) {
      return res
        .status(422)
        .send("The password length must be greater than or equal to 8");
    } else {
      user.password = Bcrypt.hashSync(password, 10);
      await user.save();
      res.send(user);
    }
  } catch (error: any) {
    return res.status(404).json({ data: error.message });
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { id, username, password, firstName, lastName } = req.body;
  try {
    let toBeChanged = await User.findById(id);

    if (!toBeChanged) {
      return res.status(400).json({
        data: "User doesn't exist",
      });
    }

    let user: UserI = toBeChanged;
    // console.log("toBechanged: ", toBeChanged);
    user.username = username || user.username;
    user.password = password || user.password;
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;

    await user.save();
    res.status(200).send(user);
  } catch (error: any) {
    console.log("error", error);
    res.status(500).json(error.toString());
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findByIdAndDelete(req.body._id);
    if (!user) {
      return res.status(404).send("No item found");
    }
    return res.status(201).send(user);
  } catch (error: any) {
    return res.status(500).send(error.toString());
  }
};
