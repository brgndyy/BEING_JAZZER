import HttpError from '../error/HttpError';
import ERROR_MESSAGES from '../constants/errorMessages';
import { Response, NextFunction } from 'express';
import findExistingUserDataFromId from '../services/databaseOfAuthService/findExistingUserDataFromId';
import { CustomRequestType } from '../@types/type';

const sendUserInfo = async (req: CustomRequestType, res: Response, next: NextFunction) => {
  try {
    const user = req.user;

    if (!user) {
      throw new HttpError(ERROR_MESSAGES.not_found_user, 503);
    }

    const existingUserInfo = await findExistingUserDataFromId(user.id);

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
