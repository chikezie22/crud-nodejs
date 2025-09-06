import type { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
interface User {
  id: number | string;
  name: string;
  email: string;
}

declare let users: User[];

export const getUsers = (req: Request, res: Response) => {
  res.send(users);
};
export const createUser = (req: Request, res: Response) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });
  res.send(users);
};

export const getUserById = (req: Request, res: Response) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user?.id === id) || {};
  res.send(`Get id route ${JSON.stringify(foundUser)}`);
};

export const deleteUserById = (req: Request, res: Response) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(users);
};

export const updateUserById = (req: Request, res: Response) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  const updatedUser = { ...foundUser, ...req.body };
  const index = users.findIndex((user) => user.id === id);
  users[index] = updatedUser;
};
