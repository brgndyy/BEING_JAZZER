import { NextResponse } from 'next/server';
import COOKIE_CONFIG from '@/_constants/cookieConfig';

const setNewAccessTokenToHeader = (response: NextResponse, newAccessToken: string) => {
  response.cookies.set('accessToken', newAccessToken, COOKIE_CONFIG.access_token);

  response.headers.set('X-NewAccessToken', newAccessToken);
};

export default setNewAccessTokenToHeader;
