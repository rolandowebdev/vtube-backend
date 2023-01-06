import express from 'express';
import { verifyToken } from '../verifyToken.js';
import {
  addComment,
  deleteComment,
  getComments
} from '../controllers/comment.js';

const router = express.Router();

// TODO: add comment
router.post('/', verifyToken, addComment);

// TODO: delete comment
router.delete('/:id', verifyToken, deleteComment);

// TODO:  get all comment
router.get('/:videoId', getComments);

export default router;
