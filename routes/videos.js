import express from 'express';
import { verifyToken } from '../verifyToken.js';
import {
  addVideo,
  addView,
  deleteVideo,
  getVideo,
  random,
  sub,
  trend,
  updateVideo,
  getByTag,
  search
} from '../controllers/video.js';

const router = express.Router();

// TODO: post video
router.post('/', verifyToken, addVideo);

// TODO: update video
router.put('/:id', verifyToken, updateVideo);

// TODO: delete video
router.delete('/:id', deleteVideo);

// TODO: find video
router.get('/find/:id', getVideo);

// TODO: update view video
router.put('/view/:id', addView);

// TODO: get trends video
router.get('/trend', trend);

// TODO: get random video
router.get('/random', random);

// TODO: get subsribe
router.get('/sub', verifyToken, sub);

// TODO: get video by tag
router.get('/tags', getByTag);

// TODO: get video by query
router.get('/search', search);

export default router;
