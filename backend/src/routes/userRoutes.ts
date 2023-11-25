import { Router } from 'express';
import { sendLoginOrSignUpEmail } from '../controllers/sendLoginOrSignupEmail';
import decryptAndRetrieveEmail from '../controllers/decryptAndRetrieveEmail';

const router = Router();

router.post('/sendAuthEmail', sendLoginOrSignUpEmail);
router.post('/register', decryptAndRetrieveEmail);

export { router as userRoutes };
