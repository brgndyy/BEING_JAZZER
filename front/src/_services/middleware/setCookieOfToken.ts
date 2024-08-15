import { NextResponse } from 'next/server';
import TOKEN_COOKIE_OPTION from '@/_constants/tokenCookieOption';

const setCookieOfToken = (response: NextResponse, type: string, token: string) => {
  const cookieConfig =
    type === 'accessToken' ? TOKEN_COOKIE_OPTION.access_token : TOKEN_COOKIE_OPTION.refresh_token;

  response.cookies.set(type, token, cookieConfig);
};

export default setCookieOfToken;
