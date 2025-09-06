import { v4 as uuidv4 } from 'uuid';
import express from 'express';
import {
  getUsers,
  createUser,
  getUserById,
  deleteUserById,
  updateUserById,
} from '../controllers/users';

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
router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUserById);

router.delete('/:id', deleteUserById);

router.patch('/:id', updateUserById);
export default router;
