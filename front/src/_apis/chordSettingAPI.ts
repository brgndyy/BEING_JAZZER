import Fetcher from './fetcher/Fetcher';
import { API_ROUTES } from '@/_constants/routes';
import { ChangeUserChordSetting, ChordSetting } from '@/_types/index';
import API_URL from '@/_constants/apiUrl';

type GetUserChordSetting = {
  convertedAllUserSetting: ChordSetting[];
};

export const getUserChordSetting = async (accessToken: string) => {
  const data = await Fetcher.get<GetUserChordSetting>(
    `${API_URL}${API_ROUTES.user_chord_setting}`,
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
  await Fetcher.post(`${API_URL}${API_ROUTES.user_chord_setting}`, {
    headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userChordSetting: chordSetting,
    }),
  });
};
