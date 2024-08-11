import { API_ROUTES } from '@/_constants/routes';
import { redirect } from 'next/navigation';
import { UserProfile, UserInfo } from '../_types/index';
import beingJazzerClient from './clients/beingJazzerClient';
import HttpError from '../_error/HttpError';
import BASE_URL from './clients/baseUrl';

type GetNewAccessTokenResponse = {
  newAccessToken: string;
};

export const getNewAccessToken = async (refreshToken: string) => {
  const response = await fetch(`${BASE_URL.dev}${API_ROUTES.new_access_token}`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  });

  const data: GetNewAccessTokenResponse = await response.json();

  if (data && data.newAccessToken) {
    return { newAccessToken: data.newAccessToken };
  }

  return;
};

type TokenValues = {
  accessTokenValue: string;
  refreshTokenValue: string;
  success: boolean;
};

export const getTokenValuesByEncryptedCode = async (path: string, encryptedCode: string) => {
  const data = await beingJazzerClient.post<TokenValues>(path, { body: { encryptedCode } });

  if (!data) {
    redirect('/not-found');
  }

  return data;
};

export const getUserInfoByEncryptedCode = async (path: string, encryptedCode: string) => {
  const data = await beingJazzerClient.post<UserInfo>(path, { body: { encryptedCode } });

  if (!data) {
    redirect('/not-found');
  }

  return data;
};

export const sendAuthEmail = async (userEmail: string) => {
  await fetch(`${BASE_URL.dev}${API_ROUTES.request_auth_email}`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ userEmail }),
  });
  // await beingJazzerClient.post<void>(API_ROUTES.request_auth_email, { body: { userEmail } });
};

export const getUserInfoByAccessToken = async (accessToken?: string) => {
  if (!accessToken) {
    return undefined;
  }

  const data = await beingJazzerClient.get<UserProfile>(`${API_ROUTES.user_info}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!data) {
    throw new HttpError('', 503);
  }

  const { userInfo } = data;

  return userInfo;
};
