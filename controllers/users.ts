import { Request, Response } from "express";
import User from "../models/user";

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.findAll();
  res.json({
    msg: "Get users",
    users: users,
  });
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findByPk(id);

  if (user) {
    res.json({
      msg: "Get user",
      user: user,
    });
  } else {
    res.status(404).json({
      msg: `User ${id} not found`,
    });
  }
};

export const postUsers = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const existsEmail = await User.findOne({
      where: {
        email: body.email,
      },
    });

    if (existsEmail) {
      return res.status(400).json({
        msg: "There is already a user with the email: " + body.email,
      });
    }

    const user = User.build(body);
    await user.save();

    res.json({ user: user });
  } catch (error) {
    console.log(error);

    res.status(404).json({
      msg: "Talk to an admin",
    });
  }
};

export const putUsers = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(400).json({
        msg: "There is no user with id: " + id,
      });
    }

    await user.update(body);

    res.json({
      msg: "Put user",
      id: id,
      user: user,
    });
  } catch (error) {
    console.log(error);

    res.status(404).json({
      msg: "Talk to an admin",
    });
  }
};

export const deleteUsers = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findByPk(id);
  if (!user) {
    return res.status(400).json({
      msg: "There is no user with id: " + id,
    });
  }

  // await user.destroy();

  await user.update({ state: false });

  res.json({
    msg: "Delete user",
    id: id,
    user: user,
  });
};
