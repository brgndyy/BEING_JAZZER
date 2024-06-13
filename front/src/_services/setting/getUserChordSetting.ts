import ERROR_MESSAGES from '@/_constants/errorMessages';
import { API_ROUTES } from '@/_constants/routes';

const getUserChordSetting = async (accessToken: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DEFAULT_BE_URL}${API_ROUTES.get_user_chord_setting}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: 'include',
      },
    );

    const data = await res.json();

    const { convertedAllUserSetting } = data;

    return convertedAllUserSetting;
  } catch (err) {
    throw new Error(ERROR_MESSAGES.fail_get_chord_setting);
  }
};

export default getUserChordSetting;
