import HttpError from '../error/HttpError';
import ERROR_MESSAGES from '../constants/errorMessages';
import { Response, NextFunction } from 'express';
import getAccessTokenFromHeader from '../services/authService/getAccessTokenFromHeader';
import decodeAccessToken from '../services/authService/decodeAccessToken';
import jwt from 'jsonwebtoken';
import { CustomRequestType } from '../@types/type';

const verifyAccessToken = async (req: CustomRequestType, res: Response, next: NextFunction) => {
  try {
    const accessToken = getAccessTokenFromHeader(req);

    if (!accessToken || accessToken === undefined || accessToken === null) {
      return res
        .status(401)
        .json({ success: false, message: ERROR_MESSAGES.not_verified_token, userInfo: undefined });
    }

    const decodedAccessToken = decodeAccessToken(accessToken);

    if (decodedAccessToken instanceof jwt.TokenExpiredError) {
      return res
        .status(401)
        .json({ success: false, message: ERROR_MESSAGES.expired_token, userInfo: undefined });
    }

    if (typeof decodedAccessToken !== 'object' || !('id' in decodedAccessToken)) {
      return res
        .status(401)
        .json({ success: false, message: ERROR_MESSAGES.not_verified_token, userInfo: undefined });
    }

    req.user = decodedAccessToken;
    next();
  } catch (err) {
    const error = new HttpError(ERROR_MESSAGES.fail_verify_access_token, 503);

    return next(error);
  }
};

export default verifyAccessToken;
