import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import HttpError from '../../error/HttpError';
import ERROR_MESSAGES from '../../constants/errorMessages';

dotenv.config();

const jwtSecret = process.env.JWT_SIGNATURE;

const getUserIdOfToken = (refreshToken: string) => {
  if (!jwtSecret) {
    throw new HttpError(ERROR_MESSAGES.NOT_DEFINED_JWT_SECRET, 503);
  }

  const verifiedToken = jwt.verify(refreshToken, jwtSecret);

  if (
    typeof verifiedToken === 'string' ||
    !Object.prototype.hasOwnProperty.call(verifiedToken, 'id')
  ) {
    throw new HttpError(ERROR_MESSAGES.FAIL_VERIFY_REFRESH_TOKEN, 404);
  }

  const userIdOfToken = verifiedToken.id;

  return userIdOfToken;
};

export default getUserIdOfToken;
