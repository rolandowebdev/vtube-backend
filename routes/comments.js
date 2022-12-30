import express from 'express';
import { comment } from '../controllers/comment.js';

const router = express.Router();
router.route('/comment', comment);

export default router;
