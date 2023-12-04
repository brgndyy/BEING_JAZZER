import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import getTokenValues from './_services/middleware/getTokenValues';
import { getNewAccessToken } from './_services/auth/getNewAccessToken';
import setNewAccessTokenToHeader from './_services/auth/setNewAccessTokenToHeader';

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const response = NextResponse.next();
  const { fetchMode, accessToken, refreshToken } = getTokenValues(request);

  if ((!accessToken && refreshToken) || (fetchMode === 'navigate' && refreshToken)) {
    const res = await getNewAccessToken(refreshToken);

    const { newAccessToken } = res;

    setNewAccessTokenToHeader(response, newAccessToken);
  }

  return response;
}

export const config = {
  matcher: ['/', '/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
