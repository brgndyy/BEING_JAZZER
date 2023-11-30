import { Router } from 'express';
import sendLoginOrSignUpEmail from '../controllers/sendLoginOrSignupEmail';
import decryptAndRetrieveEmail from '../controllers/decryptAndRetrieveEmail';
import userSignUp from '../controllers/signUpUser';
import userProfileImageUpload from '../utils/multerStorage/userProfileImageStorage';

const router = Router();

router.post('/sendAuthEmail', sendLoginOrSignUpEmail);
router.post('/register', decryptAndRetrieveEmail);
router.post('/signup', userProfileImageUpload.single('image'), userSignUp);

export { router as userRoutes };
