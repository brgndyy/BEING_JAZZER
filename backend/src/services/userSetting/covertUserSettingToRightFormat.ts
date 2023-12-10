import defaultChordSetting from '../../mocks/defaultUserChordSetting';
import { UserSettingTableType } from 'types';
import HttpError from '../../error/HttpError';
import ERROR_MESSAGES from '../../constants/errorMessages';
import getKeyNameFromKeyIdOfUserSetting from '../databaseOfChord/getKeyNameFromKeyIdOfUserSetting';
import getChordNameFromChordIdOfUserSetting from '../databaseOfChord/getChordNameFromChordIdOfUserSetting';
import parseTension from '../../utils/parseTension';

const convertUserSettingToRightFormat = async (allUserSetting: UserSettingTableType[]) => {
  try {
    const chordSetting = [...defaultChordSetting];

    for (const setting of allUserSetting) {
      const keyName = await getKeyNameFromKeyIdOfUserSetting(setting.keyId); // keyId에 해당하는 이름 조회
      const { chord, tension } = await getChordNameFromChordIdOfUserSetting(setting.chordId); // chordId에 해당하는 이름 조회

      chordSetting[0].config[keyName].isSelected = true;
      chordSetting[1].config[chord].isSelected = true;
      chordSetting[2].config[parseTension(tension)].isSelected = true;
    }

    return chordSetting;
  } catch (err) {
    throw new HttpError(ERROR_MESSAGES.fail_conver_user_setting, 503);
  }
};

export default convertUserSettingToRightFormat;
