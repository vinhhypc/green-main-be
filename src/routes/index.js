import { Router } from 'express';
import { handleUserLogin } from '../controllers/userController.js';

const router = Router();

router.use('/login', handleUserLogin);

export default router;
