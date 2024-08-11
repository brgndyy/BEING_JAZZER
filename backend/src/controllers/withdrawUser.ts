import { NextFunction, Response } from 'express';
import { CustomRequestType } from '../@types/type';
import ERROR_MESSAGES from '../constants/errorMessages';
import HttpError from '../error/HttpError';
import deleteUser from '../services/authService/deleteUser';

const withdrawUser = async (req: CustomRequestType, res: Response, next: NextFunction) => {
  try {
    const user = req.user;

    if (!user) {
      throw new HttpError(ERROR_MESSAGES.NOT_FOUND_USER, 503);
    }

    console.log('user : ', user);

    await deleteUser(user.id, user.userEmail);

    return res.status(201).json();
  } catch (err) {
    console.error('error log', err);
    const error = new HttpError(ERROR_MESSAGES.fail_withdraw, 503);

    return next(error);
  }
};

export default withdrawUser;
