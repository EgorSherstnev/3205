import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router();

router.post('/search', userController.getUsers);
//router.get('/getAll', userController.getAllUsers);

export default router;
