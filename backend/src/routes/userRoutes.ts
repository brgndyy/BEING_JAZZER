import { Router } from 'express';
import sendLoginOrSignUpEmail from '../controllers/sendLoginOrSignupEmail';
import decryptAndRetrieveEmail from '../controllers/decryptAndRetrieveEmail';
import userSignUp from '../controllers/signUpUser';
import userProfileImageUpload from '../middlewares/userProfileImageStorage';
import sendNewAccessToken from '../controllers/sendNewAccessToken';
import sendUserInfo from '../controllers/sendUserInfo';
import existingUserLogin from '../controllers/existingUserLogin';
import setUserChordSetting from '../controllers/setUserChordSetting';
import verifyAccessToken from '../middlewares/verifyAccessToken';
import sendUserSetting from '../controllers/sendUserSetting';

const router = Router();

router.get('/');

router.post('/send-auth-email', sendLoginOrSignUpEmail);
router.post('/register', decryptAndRetrieveEmail);
router.post('/signup', userProfileImageUpload.single('userImage'), userSignUp);
router.post('/new-access-token', sendNewAccessToken);
router.get('/info', verifyAccessToken, sendUserInfo);
router.post('/login-existing-user', existingUserLogin);
router.get('/chord-setting', verifyAccessToken, sendUserSetting);
router.post('/chord-setting', verifyAccessToken, setUserChordSetting);

export { router as userRoutes };
