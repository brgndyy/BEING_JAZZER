import { RefreshToken } from '../../models/refreshTokens';
import HttpError from '../../error/HttpError';
import ERROR_MESSAGES from '../../constants/errorMessages';

const deleteRefreshTokenData = async (id: number) => {
  try {
    await RefreshToken.destroy({
      where: {
        userId: id,
      },
    });
  } catch (err) {
    throw new HttpError(ERROR_MESSAGES.FAIL_DELETE_REFRESH_TOKEN_DATA, 503);
  }
};

export default deleteRefreshTokenData;
