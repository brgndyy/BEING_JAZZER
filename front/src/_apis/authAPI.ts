import { API_ROUTES } from '@/_constants/routes';
import { redirect } from 'next/navigation';
import Fetcher from './fetcher/Fetcher';

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
