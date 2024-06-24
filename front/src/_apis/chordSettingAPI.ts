import Fetcher from './fetcher/Fetcher';
import { API_ROUTES } from '@/_constants/routes';
import { ChangeUserChordSetting } from '@/_types/index';
import { ChordSetting } from '@/_types/index';

type GetUserChordSetting = {
  convertedAllUserSetting: ChordSetting[];
};

export const getUserChordSetting = async (accessToken: string) => {
  const data = await Fetcher.get<GetUserChordSetting>(
    `${process.env.NEXT_PUBLIC_DEFAULT_BE_URL}${API_ROUTES.user_chord_setting}`,
    {
      headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
    },
  );

  const { convertedAllUserSetting } = data;

  return convertedAllUserSetting;
};

export const changeUserChordSetting = async ({
  chordSetting,
  accessToken,
}: ChangeUserChordSetting) => {
  await Fetcher.post(`${process.env.NEXT_PUBLIC_DEFAULT_BE_URL}${API_ROUTES.user_chord_setting}`, {
    headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userChordSetting: chordSetting,
    }),
  });
};
