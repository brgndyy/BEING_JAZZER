import { NextResponse } from 'next/server';
import COOKIE_CONFIG from '@/_constants/tokenCookieOption';

const setNewAccessTokenToHeader = (response: NextResponse, newAccessToken: string) => {
  response.cookies.set('accessToken', newAccessToken, COOKIE_CONFIG.access_token);

  response.headers.set('X-NewAccessToken', newAccessToken);

  console.log('새로운 액세스토큰이 X-NewAccessToken헤더에 담겼어요!');
};

export default setNewAccessTokenToHeader;
