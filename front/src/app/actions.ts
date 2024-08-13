'use server';

import { baseUrl } from '@/_apis/clients/beingJazzerClient';
import { API_ROUTES } from '@/_constants/routes';
import { cookies } from 'next/headers';
import TOKEN_COOKIE_OPTION from '@/_constants/tokenCookieOption';

export const withdrawAccount = async (accessToken: string) => {
  await fetch(`${baseUrl}${API_ROUTES.withdraw_user}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-type': 'application/json',
    },
  });

  cookies().delete('accessToken');
  cookies().delete('refreshToken');
};

type UserSignUpResponse = {
  accessToken: string;
  refreshToken: string;
};

export const userSignUp = async (signUpFormData: FormData) => {
  const res = await fetch(`${baseUrl}${API_ROUTES.signup}`, {
    method: 'POST',
    body: signUpFormData,
  });

  if (!res.ok) {
    throw new Error('회원가입 중 에러 발생');
  }

  const data: UserSignUpResponse = await res.json();

  const { accessToken, refreshToken } = data;

  cookies().set('accessToken', accessToken, TOKEN_COOKIE_OPTION.access_token);
  cookies().set('refreshToken', refreshToken, TOKEN_COOKIE_OPTION.refresh_token);
};
