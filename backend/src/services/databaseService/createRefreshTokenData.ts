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
    throw new HttpError(ERROR_MESSAGES.fail_create_refresh_token_data, 503);
  }
};

export default createRefreshTokenData;
