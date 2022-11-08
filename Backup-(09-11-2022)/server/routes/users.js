import express from 'express';
import { signin, signup } from '../controllers/user.js';

const router = express.Router();

router.post('/signin', signin); // second para here signin controller
router.post('/signup', signup); // second para here signup controller

export default router;