import { RefreshToken } from '../../models/refreshTokens';
import HttpError from '../../error/HttpError';
import ERROR_MESSAGES from '../../constants/errorMessages';

const createRefreshTokenData = async (hashedRefreshToken: string, id: number) => {
  try {
    await RefreshToken.create({
      refreshToken: hashedRefreshToken,
      userId: id,
    });
  } catch (err) {
    console.error('error log', err);
    throw new HttpError(ERROR_MESSAGES.FAIL_CREATE_REFRESH_TOKEN_DATA, 503);
  }
};

export default createRefreshTokenData;
