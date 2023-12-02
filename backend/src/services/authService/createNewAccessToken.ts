import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import HttpError from '../../error/HttpError';
import ERROR_MESSAGES from '../../constants/errorMessages';
import { NewUserType } from 'types';

dotenv.config();

const jwtSecret = process.env.JWT_SIGNATURE;

const createNewAccessToken = (newUser: NewUserType) => {
  const { id, userEmail } = newUser;

  if (!jwtSecret) {
    throw new HttpError(ERROR_MESSAGES.not_defined_jwt_secret, 503);
  }

  const newAccessToken = jwt.sign({ id: id, userEmail: userEmail }, jwtSecret, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });

  return newAccessToken;
};

export default createNewAccessToken;
