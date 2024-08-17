import { API_ROUTES } from '@/_constants/routes';
import { redirect } from 'next/navigation';
import { UserProfile, UserInfo } from '../_types/index';
import beingJazzerClient, { baseUrl } from './clients/beingJazzerClient';
import HttpError from '../_error/HttpError';

type GetNewAccessTokenResponse = {
  newAccessToken: string;
};

export const getNewAccessToken = async (refreshToken: string) => {
  // const response = await fetch('/api/token', {
  //   method: 'POST',
  //   body: JSON.stringify({ refreshToken }),
  //   headers: new Headers({
  //     'Content-Type': 'application/json',
  //   }),
  // });

  // if (!response.ok) {
  //   throw new Error('에러');
  // }

  // const data = await response.json();

  // console.log('data : ', data);

  // return response.json();

  const res = await fetch(`${baseUrl}${API_ROUTES.new_access_token}`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  });

  if (!res.ok) {
    console.error('새로운 액세스 토큰을 발급 받는데에 에러가 발생했어요!');
  }

  const { newAccessToken }: GetNewAccessTokenResponse = await res.json();

  return newAccessToken;
};

type TokenValues = {
  accessTokenValue: string;
  refreshTokenValue: string;
  success: boolean;
};

export const getTokenValuesByEncryptedCode = async (path: string, encryptedCode: string) => {
  const data = await beingJazzerClient.post<TokenValues>(path, { body: { encryptedCode } });

  console.log('data: ', data);

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
  await fetch(`${baseUrl}${API_ROUTES.request_auth_email}`, {
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
