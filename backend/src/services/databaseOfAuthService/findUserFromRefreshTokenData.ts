import { RefreshToken } from '../../models/refreshTokens';
import HttpError from '../../error/HttpError';
import ERROR_MESSAGES from '../../constants/errorMessages';

const findUserFromRefreshTokenData = async (id: number) => {
  try {
    const refreshTokenData = await RefreshToken.findOne({
      where: {
        userId: id,
      },
    });

    return refreshTokenData;
  } catch (err) {
    throw new HttpError(ERROR_MESSAGES.FAIL_VERIFY_REFRESH_TOKEN, 503);
  }
};

export default findUserFromRefreshTokenData;
