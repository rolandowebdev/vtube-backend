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

// update user
router.put('/:id', verifyToken, update);

//  delete user
router.delete('/:id', verifyToken, deleteUser);

//  get a user
router.get('/find/:id', getUser);

//  subscribe a user
router.put('/sub/:id', subscribe);

//  unsubscribe a user
router.get('/unsub/:id', unsubscribe);

//  like a video
router.get('/like/:videoId', like);

//  dislike a video
router.get('/dislike/:videoId', dislike);
export default router;
