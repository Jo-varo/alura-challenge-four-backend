import { Router } from 'express';
import {
  getVideos,
  createVideo,
  updateVideo,
  deleteVideo,
} from '../controllers/videos.controllers.js';

const router = Router();

router.get('/videos', getVideos);
router.post('/videos', createVideo);
router.patch('/videos/:id', updateVideo);
router.delete('/videos/:id', deleteVideo);

export default router;
