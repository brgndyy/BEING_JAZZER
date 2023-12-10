import { KeyChordDetail } from '../../models/keyChordDetail';
import { UserSetting } from '../../models/userSetting';
import HttpError from '../../error/HttpError';
import ERROR_MESSAGES from '../../constants/errorMessages';

const findAllUserSetting = async (id: number) => {
  try {
    const allUserSetting = await UserSetting.findAll({
      where: { userId: id },
      include: [KeyChordDetail],
    });

    return allUserSetting;
  } catch (err) {
    throw new HttpError(ERROR_MESSAGES.not_found_user_setting, 503);
  }
};

export default findAllUserSetting;
