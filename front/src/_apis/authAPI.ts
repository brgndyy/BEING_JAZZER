import { API_ROUTES } from '@/_constants/routes';
import { redirect } from 'next/navigation';
import Fetcher from './fetcher/Fetcher';
import { UserProfile } from '../_types/index';

type AccessToken = {
  newAccessToken: string;
};

export const getNewAccessToken = async (refreshToken: string) => {
  const data = await Fetcher.post<AccessToken>(
    `${process.env.NEXT_PUBLIC_DEFAULT_BE_URL}${API_ROUTES.new_access_token}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
    },
  );

  if (data) {
    return { newAccessToken: data.newAccessToken };
  } else {
    return;
  }
};

type UserInfoByEncryptedCode = {
  accessTokenValue: string;
  refreshTokenValue: string;
  success: boolean;
};

export const getUserInfoByEncryptedCode = async (path: string, encryptedCode: string) => {
  const data = await Fetcher.post<UserInfoByEncryptedCode>(
    `${process.env.NEXT_PUBLIC_DEFAULT_BE_URL}${path}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ encryptedCode }),
    },
  );

  if (!data) {
    redirect('/not-found');
  }

  return data;
};

export const userSignUp = async (signUpFormData: FormData) => {
  await Fetcher.post(`${process.env.NEXT_PUBLIC_DEFAULT_BE_URL}${API_ROUTES.signup}`, {
    body: signUpFormData,
  });
};

export const sendAuthEmail = async (userEmail: string) => {
  console.log('userEmail : ', userEmail);
  await Fetcher.post(`${process.env.NEXT_PUBLIC_DEFAULT_BE_URL}${API_ROUTES.request_auth_email}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userEmail,
    }),
  });
};

export const getUserInfoByAccessToken = async (accessToken?: string) => {
  if (!accessToken) {
    return undefined;
  }

  const data = await Fetcher.get<UserProfile>(
    `${process.env.NEXT_PUBLIC_DEFAULT_BE_URL}${API_ROUTES.user_info}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  const { userInfo } = data;

  return userInfo;
};
