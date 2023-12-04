import ERROR_MESSAGES from '@/_constants/errorMessages';
import PATH_ROUTES from '@/_constants/pathRoutes';

const getUserInfoByAccessToken = async (accessToken?: string) => {
  if (!accessToken) {
    return undefined;
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DEFAULT_BE_URL}${PATH_ROUTES.get_user_info}`,
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
