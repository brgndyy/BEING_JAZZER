import { API_ROUTES } from '@/_constants/routes';
import ERROR_MESSAGES from '@/_constants/errorMessages';

export const getNewAccessToken = async (refreshToken: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEFAULT_BE_URL}${API_ROUTES.get_new_access_token}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
      credentials: 'include',
    },
  );

  if (!res.ok) {
    throw new Error(ERROR_MESSAGES.fail_get_new_access_token);
  }

  const data = await res.json();

  return data;
};
