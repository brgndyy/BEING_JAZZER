import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import getTokenValues from './_services/middleware/getTokenValues';
import { getNewAccessToken } from './_services/auth/getNewAccessToken';
import setNewAccessTokenToHeader from './_services/middleware/setNewAccessTokenToHeader';
import getUserInfoByEncryptedCode from './_services/auth/getUserInfoByEncryptedCode';
import { API_ROUTES } from './_constants/routes';
import setCookieOfToken from './_services/middleware/setCookieOfToken';

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const response = NextResponse.next();
  const { fetchMode, accessToken, refreshToken } = getTokenValues(request);

  if ((!accessToken && refreshToken) || (fetchMode === 'navigate' && refreshToken)) {
    const res = await getNewAccessToken(refreshToken);

    const { newAccessToken } = res;

    setNewAccessTokenToHeader(response, newAccessToken);
  }

  if (pathname === '/email-login') {
    const url = request.nextUrl.clone();
    const encryptedCode = searchParams.get('code')
      ? searchParams.get('code')!.replace(/ /g, '+')
      : '';

    try {
      const { accessTokenValue, refreshTokenValue, success } = await getUserInfoByEncryptedCode(
        API_ROUTES.existing_user_login,
        encryptedCode,
      );

      if (success) {
        setCookieOfToken(response, 'accessToken', accessTokenValue);
        setCookieOfToken(response, 'refreshToken', refreshTokenValue);
      }
    } catch (err) {
      url.pathname = '/not-found';
      return NextResponse.redirect(url);
    }

    return response;
  }

  return response;
}

export const config = {
  matcher: ['/', '/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
