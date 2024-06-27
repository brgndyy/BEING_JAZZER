import { Key } from '../../models/keys';
import HttpError from '../../error/HttpError';
import ERROR_MESSAGES from '../../constants/errorMessages';

const getKeyNameFromKeyIdOfUserSetting = async (keyId: number) => {
  try {
    const targetKey = await Key.findOne({
      where: {
        id: keyId,
      },
    });

    if (!targetKey) {
      throw new HttpError(ERROR_MESSAGES.NOT_FOUND_KEY, 503);
    }

    return targetKey.key;
  } catch (err) {
    throw new HttpError(ERROR_MESSAGES.NOT_FOUND_KEY, 503);
  }
};

export default getKeyNameFromKeyIdOfUserSetting;
