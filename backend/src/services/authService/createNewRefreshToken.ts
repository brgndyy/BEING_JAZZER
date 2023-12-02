import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import HttpError from '../../error/HttpError';
import ERROR_MESSAGES from '../../constants/errorMessages';
import { NewUserType } from 'types';

dotenv.config();

const jwtSecret = process.env.JWT_SIGNATURE;

const createNewRefreshToken = (newUser: NewUserType) => {
  const { id } = newUser;

  if (!jwtSecret) {
    throw new HttpError(ERROR_MESSAGES.not_defined_jwt_secret, 503);
  }

  const newRefreshToken = jwt.sign({ id: id }, jwtSecret, {
    algorithm: 'HS256',
    expiresIn: '7d',
  });

  return newRefreshToken;
};

export default createNewRefreshToken;
