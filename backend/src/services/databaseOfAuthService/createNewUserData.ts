import HttpError from '../../error/HttpError';
import { User } from '../../models/users';
import ERROR_MESSAGES from '../../constants/errorMessages';

const createNewUserData = async (
  userName: string,
  userEmail: string,
  emailId: number,
  userProfileImageSrc: string,
) => {
  try {
    const newUser = await User.create({
      userName,
      userEmail,
      emailId,
      userProfileImageSrc,
      isAdmin: false,
      nowLoggedIn: true,
    });

    return newUser;
  } catch (err) {
    console.error(err);
    throw new HttpError(ERROR_MESSAGES.FAIL_SIGN_UP, 500);
  }
};

export default createNewUserData;
