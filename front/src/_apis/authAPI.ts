import { API_ROUTES } from '@/_constants/routes';
import { redirect } from 'next/navigation';
import { UserProfile, UserInfo } from '../_types/index';
import beingJazzerClient from './clients/beingJazzerClient';
import HttpError from '../_error/HttpError';

type AccessToken = {
  newAccessToken: string;
};

export const getNewAccessToken = async (refreshToken: string) => {
  const data = await beingJazzerClient.post<AccessToken>(`${API_ROUTES.new_access_token}`, {
    body: { refreshToken },
  });

  if (data) {
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

export const userSignUp = async (signUpFormData: FormData) => {
  await beingJazzerClient.post<void>(API_ROUTES.signup, { body: { signUpFormData } });
};

export const sendAuthEmail = async (userEmail: string) => {
  await beingJazzerClient.post<void>(API_ROUTES.request_auth_email, { body: { userEmail } });
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

export const withdrawAccount = async (accessToken: string) => {
  await beingJazzerClient.post<void>(API_ROUTES.withdraw_user, {
    body: null,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
