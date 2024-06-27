import { UserSetting } from '../../models/userSetting';
import HttpError from '../../error/HttpError';
import { USER_CHORD_SETTING_ERROR_MESSAGE } from '../../constants/errorMessages';
import { KeyChordDetail } from '../../models/keyChordDetail';

interface TransformedUserChordSetting {
  keyId: number;
  chordId: number;
  tension: string;
  quality: string;
}

type SaveNewUserSettings = {
  userId: number;
  userChordSetting: TransformedUserChordSetting[];
};

const saveNewUserSettings = async ({ userId, userChordSetting }: SaveNewUserSettings) => {
  try {
    for (const setting of userChordSetting) {
      const keyChordDetails = await KeyChordDetail.findAll({
        where: { keyId: setting.keyId, chordId: setting.chordId },
      });

      for (const detail of keyChordDetails) {
        await UserSetting.create({
          userId: userId,
          keyId: setting.keyId,
          chordId: setting.chordId,
          keyChordDetailId: detail.id,
        });
      }
    }
  } catch (err) {
    throw new HttpError(USER_CHORD_SETTING_ERROR_MESSAGE.FAIL_SAVE_USER_SETTING, 503);
  }
};

export default saveNewUserSettings;
