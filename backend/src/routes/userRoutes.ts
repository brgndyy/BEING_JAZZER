import { Router } from 'express';
import sendLoginOrSignUpEmail from '../controllers/sendLoginOrSignupEmail';
import decryptAndRetrieveEmail from '../controllers/decryptAndRetrieveEmail';
import userSignUp from '../controllers/signUpUser';
import userProfileImageUpload from '../utils/multerStorage/userProfileImageStorage';
import sendNewAccessToken from '../controllers/sendNewAccessToken';
import sendUserInfo from '../controllers/sendUserInfo';

const router = Router();

router.post('/send-auth-email', sendLoginOrSignUpEmail);
router.post('/register', decryptAndRetrieveEmail);
router.post('/signup', userProfileImageUpload.single('userImage'), userSignUp);
router.post('/new-access-token', sendNewAccessToken);
router.post('/info', sendUserInfo);

export { router as userRoutes };
