import express from 'express';
import { getUsers, getUserById, about } from '../../controllers/userController';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);

router.get('/about', about);

export default router;
