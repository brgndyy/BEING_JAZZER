import ERROR_MESSAGES from '@/_constants/errorMessages';
import { API_ROUTES } from '@/_constants/routes';

const getUserInfoByAccessToken = async (accessToken?: string) => {
  if (!accessToken) {
    return undefined;
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DEFAULT_BE_URL}${API_ROUTES.get_user_info}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: 'include',
      },
    );

    if (!res.ok) {
      throw new Error(ERROR_MESSAGES.fail_get_user_info);
    }

    const data = await res.json();

    const { userInfo } = data;

    return userInfo;
  } catch (err) {
    throw new Error(ERROR_MESSAGES.fail_get_user_info);
  }
};

export default getUserInfoByAccessToken;
