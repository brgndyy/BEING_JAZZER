import { Router } from 'express';
import { sendLoginOrSignUpEmail } from '../controllers/sendLoginOrSignupEmail';

const router = Router();

router.post('/sendAuthEmail', sendLoginOrSignUpEmail);

export { router as userRoutes };
