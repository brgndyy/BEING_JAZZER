import { API_ROUTES } from '@/_constants/routes';
import { redirect } from 'next/navigation';
import Fetcher from './fetcher/Fetcher';
import { UserProfile, UserInfo } from '../_types/index';
import API_URL from '@/_constants/apiUrl';

type AccessToken = {
  newAccessToken: string;
};

export const getNewAccessToken = async (refreshToken: string) => {
  const data = await Fetcher.post<AccessToken>(`${API_URL}${API_ROUTES.new_access_token}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken }),
  });

  if (data) {
    return { newAccessToken: data.newAccessToken };
  } else {
    return;
  }
};

type TokenValues = {
  accessTokenValue: string;
  refreshTokenValue: string;
  success: boolean;
};

export const getTokenValuesByEncryptedCode = async (path: string, encryptedCode: string) => {
  const data = await Fetcher.post<TokenValues>(`${API_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ encryptedCode }),
  });

  if (!data) {
    redirect('/not-found');
  }

  return data;
};

export const getUserInfoByEncryptedCode = async (path: string, encryptedCode: string) => {
  const data = await Fetcher.post<UserInfo>(`${API_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ encryptedCode }),
  });

  if (!data) {
    redirect('/not-found');
  }

  return data;
};

export const userSignUp = async (signUpFormData: FormData) => {
  await Fetcher.post(`${API_URL}${API_ROUTES.signup}`, {
    body: signUpFormData,
  });
};

export const sendAuthEmail = async (userEmail: string) => {
  await Fetcher.post(`${API_URL}${API_ROUTES.request_auth_email}`, {
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

  const data = await Fetcher.get<UserProfile>(`${API_URL}${API_ROUTES.user_info}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const { userInfo } = data;

  return userInfo;
};

export const withdrawAccount = async (accessToken: string) => {
  await Fetcher.post<void>(`${API_URL}${API_ROUTES.withdraw_user}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
