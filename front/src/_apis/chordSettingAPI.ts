import Fetcher from './fetcher/Fetcher';
import { API_ROUTES } from '@/_constants/routes';
import { ChangeUserChordSetting } from '@/_types/index';

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
