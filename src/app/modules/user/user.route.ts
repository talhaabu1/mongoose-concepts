import { Router } from 'express';
import { userControllers } from './user.controller';

const router = Router();

// will call controller function
router.post('/create-user', userControllers.createUser);

export const userRoutes = router;
