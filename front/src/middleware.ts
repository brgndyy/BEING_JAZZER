import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import getTokenValues from './_services/middleware/getTokenValues';
import { getNewAccessToken, getTokenValuesByEncryptedCode } from './_apis/authAPI';
import { API_ROUTES } from './_constants/routes';
import setCookieOfToken from './_services/middleware/setCookieOfToken';

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const { accessToken, refreshToken } = getTokenValues(request);
  let response = NextResponse.next();

  console.log('실행!');

  if (!accessToken && refreshToken) {
    const newAccessToken = await getNewAccessToken(refreshToken);

    console.log('미들웨어 newAccessToken', newAccessToken);
    setCookieOfToken(response, 'accessToken', newAccessToken);
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

      console.log('/email-login 미들웨어의 accessTokenValue: ', accessTokenValue);
      console.log('/email-login 미들웨어의 refreshTokenValue: ', refreshTokenValue);

      if (success) {
        setCookieOfToken(response, 'accessToken', accessTokenValue);
        setCookieOfToken(response, 'refreshToken', refreshTokenValue);
      }
    } catch (err) {
      url.pathname = '/not-found';
      return NextResponse.redirect(url);
    }
  }

  return response || NextResponse.next();
}

export const config = {
  matcher: ['/', '/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
