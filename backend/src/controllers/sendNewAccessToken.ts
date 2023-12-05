import { Request, Response, NextFunction } from 'express';
import HttpError from '../error/HttpError';
import ERROR_MESSAGES from '../constants/errorMessages';
import getUserIdOfToken from '../services/authService/getUserIdOfToken';
import findDataOfRefreshToken from '../services/authService/findDataOfRefreshToken';
import findUserFromRefreshTokenData from '../services/databaseOfAuthService/findUserFromRefreshTokenData';
import findExistingUserDataFromId from '../services/databaseOfAuthService/findExistingUserDataFromId';
import createNewAccessToken from '../services/authService/createNewAccessToken';
import sendTokenCookieToClient from '../services/authService/sendTokenCookieToClient';

const sendNewAccessToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { refreshToken } = req.body;

    const userIdOfToken = getUserIdOfToken(refreshToken);

    const dataOfRefreshToken = await findDataOfRefreshToken(userIdOfToken);

    if (!dataOfRefreshToken) {
      throw new HttpError(ERROR_MESSAGES.fail_verify_refresh_token, 503);
    }

    const foundedUserFromRefreshTokenData = await findUserFromRefreshTokenData(
      dataOfRefreshToken.id,
    );

    if (!foundedUserFromRefreshTokenData) {
      throw new HttpError(ERROR_MESSAGES.fail_verify_refresh_token, 503);
    }

    const foundedExisitngUserFromId = await findExistingUserDataFromId(
      foundedUserFromRefreshTokenData.userId,
    );

    if (!foundedExisitngUserFromId) {
      throw new HttpError(ERROR_MESSAGES.not_found_user, 503);
    }

    const newAccessToken = createNewAccessToken(foundedExisitngUserFromId);

    sendTokenCookieToClient('accessToken', newAccessToken, res);

    return res.json({
      message: '새로운 엑세스 토큰 발급 완료 !',
      user: foundedExisitngUserFromId,
      newAccessToken: newAccessToken,
    });
  } catch (err) {
    const error = new HttpError(ERROR_MESSAGES.fail_send_new_access_token, 503);
    return next(error);
  }
};

export default sendNewAccessToken;
