import { Router } from 'express';
import sendDefaultChordImages from '../controllers/sendDefaultChordImages';
import sendUserChordImages from '../controllers/sendUserChordImages';
import verifyAccessToken from '../middlewares/verifyAccessToken';

const router = Router();

router.get('/default', sendDefaultChordImages);
router.get('/user', verifyAccessToken, sendUserChordImages);

export { router as chordImageRoutes };
