import { Response } from 'express';
import CONFIG from '../constants/config';

const sendTokenCookieToClient = (type: string, token: string, res: Response) => {
  const cookieConfig = type === 'accessToken' ? CONFIG.access_token : CONFIG.refresh_token;

  return res.cookie(type, token, cookieConfig);
};

export default sendTokenCookieToClient;
