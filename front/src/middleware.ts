import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import getTokenValues from './_services/middleware/getTokenValues';
import { getNewAccessToken, getTokenValuesByEncryptedCode } from './_apis/authAPI';
import { API_ROUTES } from './_constants/routes';
import setCookieOfToken from './_services/middleware/setCookieOfToken';
import TOKEN_COOKIE_OPTION from './_constants/tokenCookieOption';

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const { accessToken, refreshToken } = getTokenValues(request);
  let response = null;

  if (!accessToken && refreshToken) {
    const res = await getNewAccessToken(refreshToken);
    if (res && res.newAccessToken) {
      console.log('test');
      response = NextResponse.next();

      response.cookies.set('accessToken', res.newAccessToken, TOKEN_COOKIE_OPTION.access_token);

      response.headers.set('X-NewAccessToken', res.newAccessToken);
    }
  }

  if (pathname === '/email-login') {
    const url = request.nextUrl.clone();
    const encryptedCode = searchParams.get('code')
      ? searchParams.get('code')!.replace(/ /g, '+')
      : '';

    try {
      const { accessTokenValue, refreshTokenValue, success } = await getTokenValuesByEncryptedCode(
        API_ROUTES.existing_user_login,
        encryptedCode,
      );

      if (success) {
        response = response || NextResponse.next();
        setCookieOfToken(response, 'accessToken', accessTokenValue);
        setCookieOfToken(response, 'refreshToken', refreshTokenValue);
      }
    } catch (err) {
      url.pathname = '/not-found';
      return NextResponse.redirect(url);
    }

    return response || NextResponse.next();
  }

  return response || NextResponse.next();
}

export const config = {
  matcher: ['/', '/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
