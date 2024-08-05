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

    console.log('encryptted :', encryptedCode);

    const authEmailRecordData = await findUserEmailDataFromEncryptedCode(encryptedCode);

    console.log('auth: ', authEmailRecordData);

    if (!authEmailRecordData) {
      throw new HttpError(ERROR_MESSAGES.NOT_FOUND_EMAIL_RECORD, 503);
    }

    const existingUser = await findExisitingUserDataFromEmail(authEmailRecordData.userEmail);

    if (!existingUser) {
      throw new HttpError(ERROR_MESSAGES.NOT_FOUND_USER, 503);
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
    const error = new HttpError(ERROR_MESSAGES.FAIL_LOGIN, 503);

    return next(error);
  }
};

export default existingUserLogin;
