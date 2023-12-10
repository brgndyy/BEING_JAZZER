import { CustomRequestType } from '../@types/type';
import { Response, NextFunction } from 'express';
import HttpError from '../error/HttpError';
import ERROR_MESSAGES from '../constants/errorMessages';
import findExistingUserDataFromId from '../services/databaseOfAuthService/findExistingUserDataFromId';
import findAllUserSetting from '../services/userSetting/findAllUserSetting';
import convertUserSettingToRightFormat from '../services/userSetting/covertUserSettingToRightFormat';

const setUserChordSetting = async (req: CustomRequestType, res: Response, next: NextFunction) => {
  try {
    const user = req.user;

    if (!user) {
      throw new HttpError(ERROR_MESSAGES.not_found_user, 503);
    }

    const existingUser = await findExistingUserDataFromId(user.id);

    if (!existingUser) {
      throw new HttpError(ERROR_MESSAGES.not_found_user, 503);
    }

    const allUserSetting = await findAllUserSetting(existingUser.id);

    const convertedAllUserSetting = await convertUserSettingToRightFormat(allUserSetting);

    console.log(convertedAllUserSetting);

    return res.json({ convertedAllUserSetting: convertedAllUserSetting });
  } catch (err) {
    const error = new HttpError(ERROR_MESSAGES.fail_conver_user_setting, 503);

    return next(error);
  }
};

export default setUserChordSetting;
