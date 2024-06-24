import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import getTokenValues from './_services/middleware/getTokenValues';
import { getNewAccessToken } from './_apis/authAPI';
import setNewAccessTokenToHeader from './_services/middleware/setNewAccessTokenToHeader';
import { getUserInfoByEncryptedCode } from './_apis/authAPI';
import { API_ROUTES } from './_constants/routes';
import setCookieOfToken from './_services/middleware/setCookieOfToken';

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const response = NextResponse.next();
  const { fetchMode, accessToken, refreshToken } = getTokenValues(request);

  if (!accessToken && refreshToken) {
    const res = await getNewAccessToken(refreshToken);
    if (res && res.newAccessToken) {
      setNewAccessTokenToHeader(response, res.newAccessToken);
    }
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
