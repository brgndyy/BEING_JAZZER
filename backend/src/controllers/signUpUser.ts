import { Response, Request, NextFunction } from 'express';
import HttpError from '../error/HttpError';
import findExistingUserDataFromEmail from '../services/databaseOfAuthService/findExistingUserDataFromEmail';
import ERROR_MESSAGES from '../constants/errorMessages';
import findAuthEmailRecordDataFromEmail from '../services/databaseOfAuthService/findAuthEmailRecordDataFromEmail';
import PATH from '../constants/path';
import createNewUserData from '../services/databaseOfAuthService/createNewUserData';
import createNewAccessToken from '../services/authService/createNewAccessToken';
import createNewRefreshToken from '../services/authService/createNewRefreshToken';
import sendTokenCookieToClient from '../services/authService/sendTokenCookieToClient';
import createRefreshTokenData from '../services/databaseOfAuthService/createRefreshTokenData';
import hashRefreshToken from '../utils/hashRefreshToken';
import setAllKeyChordDetails from '../services/databaseOfimageService/setAllKeyChordDetails';

const userSignUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userName, userEmail } = req.body;

    console.log('userName,', userName);
    console.log('userEmail,', userEmail);

    const userProfileImageSrc = req.file
      ? `${PATH.replace_profile_image_url}${req.file.filename}`
      : PATH.default_user_profile_image_url;

    const existingUser = await findExistingUserDataFromEmail(userEmail);

    console.log('existingUser : ', existingUser);

    if (existingUser) {
      throw new HttpError(ERROR_MESSAGES.EXISTING_USER, 422);
    }

    const emailFromRecord = await findAuthEmailRecordDataFromEmail(userEmail);

    if (!emailFromRecord) {
      throw new HttpError(ERROR_MESSAGES.NOT_FOUND_EMAIL_RECORD, 503);
    }

    const emailId = emailFromRecord.id;

    const newUser = await createNewUserData(userName, userEmail, emailId, userProfileImageSrc);

    const newAccessToken = createNewAccessToken(newUser);

    const newRefreshToken = createNewRefreshToken(newUser);

    const hashedRefreshToken = await hashRefreshToken(newRefreshToken);

    await createRefreshTokenData(hashedRefreshToken, newUser.id);

    await setAllKeyChordDetails(newUser.id);

    sendTokenCookieToClient('accessToken', newAccessToken, res);
    sendTokenCookieToClient('refreshToken', newRefreshToken, res);
  } catch (err) {
    const error = new HttpError(ERROR_MESSAGES.FAIL_SIGN_UP, 503);

    return next(error);
  }
};

export default userSignUp;
