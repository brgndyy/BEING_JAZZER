import { NextResponse } from 'next/server';
import COOKIE_CONFIG from '@/_constants/tokenCookieOption';

const setCookieOfToken = (response: NextResponse, type: string, token: string) => {
  const cookieConfig =
    type === 'accessToken' ? COOKIE_CONFIG.access_token : COOKIE_CONFIG.refresh_token;

  response.cookies.set(type, token, cookieConfig);
};

export default setCookieOfToken;
