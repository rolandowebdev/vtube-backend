import express from 'express';
import { verifyToken } from '../verifyToken.js';
import {
  deleteUser,
  dislike,
  getUser,
  like,
  subscribe,
  unsubscribe,
  update
} from '../controllers/user.js';

const router = express.Router();

// TODO: pdate user
router.put('/:id', verifyToken, update);

// TODO: delete user
router.delete('/:id', verifyToken, deleteUser);

// TODO: get a user
router.get('/find/:id', getUser);

// TODO: subscribe a user
router.put('/sub/:id', verifyToken, subscribe);

// TODO: unsubscribe a user
router.get('/unsub/:id', unsubscribe);

// TODO: like a video
router.get('/like/:videoId', like);

// TODO: dislike a video
router.get('/dislike/:videoId', dislike);
export default router;
