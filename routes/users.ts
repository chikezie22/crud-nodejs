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

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]   # 👈 this controls the header
 *     responses:
 *       200:
 *         description: List of users
 */

router.get('/', getUsers);
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               age:
 *                 type: number
 *     responses:
 *       201:
 *         description: User created successfully
 */

router.post('/', createUser);
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     responses:
 *       200:
 *         description: User details
 *       404:
 *         description: User not found
 */

router.get('/:id', getUserById);

router.delete('/:id', deleteUserById);

router.patch('/:id', updateUserById);
export default router;
