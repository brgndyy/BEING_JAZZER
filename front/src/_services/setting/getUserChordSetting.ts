import ERROR_MESSAGES from '@/_constants/errorMessages';
import PATH_ROUTES from '@/_constants/pathRoutes';

const getUserChordSetting = async (accessToken: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DEFAULT_BE_URL}${PATH_ROUTES.get_user_chord_setting}`,
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
