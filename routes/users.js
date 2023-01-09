import express from 'express';
import { verifyToken } from '../verifyToken.js';
import {
  deleteUser,
  getUser,
  subscribe,
  unsubscribe,
  update,
  dislike,
  like
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
router.put('/unsub/:id', verifyToken, unsubscribe);

// TODO: like a video
router.put('/like/:videoId', verifyToken, like);

// TODO: dislike a video
router.put('/dislike/:videoId', verifyToken, dislike);

export default router;
