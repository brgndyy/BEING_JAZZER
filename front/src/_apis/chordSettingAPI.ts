import { API_ROUTES } from '@/_constants/routes';
import { ChangeUserChordSetting, ChordSetting } from '@/_types/index';
import beingJazzerClient from './clients/beingJazzerClient';
import HttpError from '../_error/HttpError';

type GetUserChordSetting = {
  convertedAllUserSetting: ChordSetting[];
};

export const getUserChordSetting = async (accessToken: string) => {
  const data = await beingJazzerClient.get<GetUserChordSetting>(API_ROUTES.user_chord_setting, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!data) {
    throw new HttpError('', 503);
  }

  const { convertedAllUserSetting } = data;

  return convertedAllUserSetting;
};

export const changeUserChordSetting = async ({
  chordSetting,
  accessToken,
}: ChangeUserChordSetting) => {
  await beingJazzerClient.post(API_ROUTES.user_chord_setting, {
    headers: { Authorization: `Bearer ${accessToken}` },
    body: {
      userChordSetting: chordSetting,
    },
  });
};
