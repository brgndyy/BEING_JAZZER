import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import HttpError from '../../error/HttpError';
import ERROR_MESSAGES from '../../constants/errorMessages';

dotenv.config();

const jwtSecret = process.env.JWT_SIGNATURE;

const decodeAccessToken = (accessToken: string) => {
  if (!jwtSecret) {
    throw new HttpError(ERROR_MESSAGES.not_defined_jwt_secret, 503);
  }

  const decodeToken = jwt.verify(accessToken, jwtSecret);

  return decodeToken;
};

export default decodeAccessToken;
