import ERROR_MESSAGES from '../../constants/errorMessages';
import HttpError from '../../error/HttpError';
import { UserSetting } from '../../models/userSetting';

const deleteExistingUserSettings = async (userId: number) => {
  try {
    await UserSetting.destroy({ where: { userId } });
  } catch (err) {
    throw new HttpError(ERROR_MESSAGES.FAIL_DELETE_USER_SETTING, 503);
  }
};

export default deleteExistingUserSettings;
