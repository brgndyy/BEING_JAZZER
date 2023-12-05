import findUserEmailDataFromEncryptedCode from '../services/databaseOfAuthService/findUserEmailDataFromEncryptedCode';
import { Request, Response, NextFunction } from 'express';
import HttpError from '../error/HttpError';
import ERROR_MESSAGES from '../constants/errorMessages';
import findExisitingUserDataFromEmail from '../services/databaseOfAuthService/findExistingUserDataFromEmail';
import deleteRefreshTokenData from '../services/databaseOfAuthService/deleteRefreshTokenData';
import createNewAccessToken from '../services/authService/createNewAccessToken';
import createNewRefreshToken from '../services/authService/createNewRefreshToken';
import hashRefreshToken from '../utils/hashRefreshToken';
import createRefreshTokenData from '../services/databaseOfAuthService/createRefreshTokenData';

const existingUserLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { encryptedCode } = req.body;

    const authEmailRecordData = await findUserEmailDataFromEncryptedCode(encryptedCode);

    if (!authEmailRecordData) {
      throw new HttpError(ERROR_MESSAGES.not_found_email_record, 503);
    }

    const existingUser = await findExisitingUserDataFromEmail(authEmailRecordData.userEmail);

    if (!existingUser) {
      throw new HttpError(ERROR_MESSAGES.not_found_user, 503);
    }

    await deleteRefreshTokenData(existingUser.id);

    const newAccessToken = createNewAccessToken(existingUser);

    const newRefreshToken = createNewRefreshToken(existingUser);

    const hashedToken = await hashRefreshToken(newRefreshToken);

    await createRefreshTokenData(hashedToken, existingUser.id);

    return res.json({
      success: true,
      accessTokenValue: newAccessToken,
      refreshTokenValue: newRefreshToken,
    });
  } catch (err) {
    const error = new HttpError(ERROR_MESSAGES.fail_login, 503);

    return next(error);
  }
};

export default existingUserLogin;
