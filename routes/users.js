import express from 'express';
import { user } from '../controllers/user.js';

const router = express.Router();
router.route('/user', user);

export default router;
