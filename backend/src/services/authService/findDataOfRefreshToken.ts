import HttpError from '../../error/HttpError';
import ERROR_MESSAGES from '../../constants/errorMessages';
import { RefreshToken } from '../../models/refreshTokens';

const findDataOfRefreshToken = async (userIdOfToken: number) => {
  try {
    const dataOfRefreshToken = await RefreshToken.findOne({
      where: {
        userId: userIdOfToken,
      },
    });

    return dataOfRefreshToken;
  } catch (err) {
    throw new HttpError(ERROR_MESSAGES.FAIL_VERIFY_REFRESH_TOKEN, 503);
  }
};

export default findDataOfRefreshToken;
