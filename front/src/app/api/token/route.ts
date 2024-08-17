import { NextResponse } from 'next/server';
import TOKEN_COOKIE_OPTION from '@/_constants/tokenCookieOption';
import ERROR_MESSAGES from '@/_constants/errorMessages';

export async function POST(request: Request) {
  try {
    const { newAccessToken } = await request.json();

    console.log('api route newAccessToken! : ', newAccessToken);

    const response = new NextResponse();

    response.cookies.set('accessToken', newAccessToken, TOKEN_COOKIE_OPTION.access_token);

    return response;
  } catch (err) {
    throw new Error(ERROR_MESSAGES.fail_get_new_access_token);
  }
}
