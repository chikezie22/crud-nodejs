import { v4 as uuidv4 } from 'uuid';
import express from 'express';
import { use } from 'react';

const router = express.Router();
// all routes here are starting from /users
let users = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    id: uuidv4(),
  },
  {
    firstName: 'Jane',
    lastName: 'Phillph',
    age: 21,
    id: uuidv4(),
  },
];
router.get('/', (req, res) => {
  console.log(users);
  res.send(users);
});

router.post('/', (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });
  res.send(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user?.id === id) || {};
  res.send(`Get id route ${JSON.stringify(foundUser)}`);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(users);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  const updatedUser = { ...foundUser, ...req.body };
  const index = users.findIndex((user) => user.id === id);
  users[index] = updatedUser;
});
export default router;
