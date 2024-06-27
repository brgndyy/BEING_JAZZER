import { CustomRequestType } from '../@types/type';
import { Response, NextFunction } from 'express';
import HttpError from '../error/HttpError';
import ERROR_MESSAGES from '../constants/errorMessages';
import findExistingUserDataFromId from '../services/databaseOfAuthService/findExistingUserDataFromId';
import findAllUserSetting from '../services/userSetting/findAllUserSetting';
import convertUserSettingToRightFormat from '../services/userSetting/covertUserSettingToRightFormat';
import deleteExistingUserSettings from '../services/databaseOfChord/deleteExistingUserSettings';
import transformUserChordSetting from '../services/databaseOfChord/transformUserChordSetting';
import saveNewUserSettings from '../services/databaseOfChord/saveNewUserSettings';

const setUserChordSetting = async (req: CustomRequestType, res: Response, next: NextFunction) => {
  try {
    const user = req.user;

    const { userChordSetting } = req.body;

    if (!user) {
      throw new HttpError(ERROR_MESSAGES.NOT_FOUND_USER, 503);
    }

    const existingUser = await findExistingUserDataFromId(user.id);

    if (!existingUser) {
      throw new HttpError(ERROR_MESSAGES.NOT_FOUND_USER, 503);
    }

    await deleteExistingUserSettings(existingUser.id);

    const transformedUserChordSetting = await transformUserChordSetting(userChordSetting);

    await saveNewUserSettings({
      userId: existingUser.id,
      userChordSetting: transformedUserChordSetting,
    });

    const allUserSetting = await findAllUserSetting(existingUser.id);

    const convertedAllUserSetting = await convertUserSettingToRightFormat(allUserSetting);

    return res.json({ convertedAllUserSetting: convertedAllUserSetting });
  } catch (err) {
    const error = new HttpError(ERROR_MESSAGES.FAIL_CONVERT_USER_SETTING, 503);

    return next(error);
  }
};

export default setUserChordSetting;
