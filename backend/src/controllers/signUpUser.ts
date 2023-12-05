import { Response, Request, NextFunction } from 'express';
import HttpError from '../error/HttpError';
import findExisitingUserDataFromEmail from '../services/databaseService/findExistingUserDataFromEmail';
import ERROR_MESSAGES from '../constants/errorMessages';
import findAuthEmailRecordDataFromEmail from '../services/databaseService/findAuthEmailRecordDataFromEmail';
import PATH from '../constants/path';
import createNewUserData from '../services/databaseService/createNewUserData';
import createNewAccessToken from '../services/authService/createNewAccessToken';
import createNewRefreshToken from '../services/authService/createNewRefreshToken';
import sendTokenCookieToClient from '../services/authService/sendTokenCookieToClient';
import PROGRESS_MESSAGES from '../constants/progressMessages';
import createRefreshTokenData from '../services/databaseService/createRefreshTokenData';
import hashRefreshToken from '../utils/hashRefreshToken';

const userSignUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userName, userEmail } = req.body;

    const userProfileImageSrc = req.file
      ? `${PATH.replace_profile_image_url}${req.file.filename}`
      : PATH.default_user_profile_image_url;

    const existingUser = await findExisitingUserDataFromEmail(userEmail);

    if (existingUser) {
      throw new HttpError(ERROR_MESSAGES.existing_user, 422);
    }

    const emailFromRecord = await findAuthEmailRecordDataFromEmail(userEmail);

    if (!emailFromRecord) {
      throw new HttpError(ERROR_MESSAGES.not_found_email_record, 503);
    }

    const emailId = emailFromRecord.id;

    const newUser = await createNewUserData(userName, userEmail, emailId, userProfileImageSrc);

    const newAccessToken = createNewAccessToken(newUser);

    const newRefreshToken = createNewRefreshToken(newUser);

    const hashedRefreshToken = await hashRefreshToken(newRefreshToken);

    await createRefreshTokenData(hashedRefreshToken, newUser.id);

    sendTokenCookieToClient('accessToken', newAccessToken, res);
    sendTokenCookieToClient('refreshToken', newRefreshToken, res);

    return res.json({ success: true, message: PROGRESS_MESSAGES.succeed_sign_up });
  } catch (err) {
    const error = new HttpError(ERROR_MESSAGES.fail_sign_up, 503);

    return next(error);
  }
};

export default userSignUp;
