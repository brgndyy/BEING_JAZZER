import HttpError from '../error/HttpError';
import ERROR_MESSAGES from '../constants/errorMessages';
import { Request, Response, NextFunction } from 'express';
import getAccessTokenFromHeader from '../services/authService/getAccessTokenFromHeader';
import decodeAccessToken from '../services/authService/decodeAccessToken';
import jwt from 'jsonwebtoken';
import findExistingUserDataFromId from '../services/databaseOfAuthService/findExistingUserDataFromId';

const sendUserInfo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const accessToken = getAccessTokenFromHeader(req);

    if (!accessToken || accessToken === undefined || accessToken === null) {
      return res.json({ userInfo: undefined });
    }

    const decodedAccessToken = decodeAccessToken(accessToken);

    if (decodedAccessToken instanceof jwt.TokenExpiredError) {
      return res.json({ userInfo: undefined });
    }

    if (typeof decodedAccessToken !== 'object' || !('id' in decodedAccessToken)) {
      return res.json({ userInfo: undefined });
    }

    const existingUserInfo = await findExistingUserDataFromId(decodedAccessToken.id);

    if (!existingUserInfo) {
      throw new HttpError(ERROR_MESSAGES.not_found_user, 503);
    }

    return res.json({ userInfo: existingUserInfo });
  } catch (err) {
    const error = new HttpError(ERROR_MESSAGES.fail_send_user_info, 503);
    return next(error);
  }
};

export default sendUserInfo;
