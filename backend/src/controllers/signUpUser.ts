import { Response, Request, NextFunction } from 'express';
import HttpError from '../error/HttpError';
import findExisitingUserFromEmail from '../services/findExistingUserFromEmail';
import ERROR_MESSAGES from '../constants/errorMessages';
import findAuthEmailRecordFromEmail from '../services/findAuthEmailRecordFromEmail';
import PATH from '../constants/path';
import createNewUser from '../services/createNewUser';
import createNewAccessToken from '../services/createNewAccessToken';
import createNewRefreshToken from '../services/createNewRefreshToken';
import sendTokenCookieToClient from '../services/sendTokenCookieToClient';
import PROGRESS_MESSAGES from '../constants/progressMessages';

const userSignUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userName, userEmail } = req.body;

    const userProfileImageSrc = req.file?.path || PATH.default_user_profile_image_url;

    const existingUser = await findExisitingUserFromEmail(userEmail);

    if (existingUser) {
      throw new HttpError(ERROR_MESSAGES.existing_user, 422);
    }

    const emailFromRecord = await findAuthEmailRecordFromEmail(userEmail);

    if (!emailFromRecord) {
      throw new HttpError(ERROR_MESSAGES.not_found_email_record, 503);
    }

    const emailId = emailFromRecord.id;

    const newUser = await createNewUser(userName, userEmail, emailId, userProfileImageSrc);

    const newAccessToken = createNewAccessToken(newUser);

    const newRefreshAccessToken = createNewRefreshToken(newUser);

    sendTokenCookieToClient('accessToken', newAccessToken, res);
    sendTokenCookieToClient('refreshToken', newRefreshAccessToken, res);

    return res.json({ message: PROGRESS_MESSAGES.succeed_sign_up });
  } catch (err) {
    const error = new HttpError(ERROR_MESSAGES.fail_sign_up, 503);

    return next(error);
  }
};

export default userSignUp;
