import express from 'express';
import { signup } from '../controllers/auth.js';

const router = express.Router();

// create user
router.post('/signup', signup);

// sign in
router.post('/signin');

// google authentication
router.post('/google');

export default router;
