import PATH_ROUTES from '@/_constants/pathRoutes';

const getSignupUserEmail = async (encryptedCode: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEFAULT_BE_URL}${PATH_ROUTES.register_user_info}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ encryptedCode }),
      credentials: 'include',
    },
  );

  if (!res.ok) {
    return { userEmail: undefined };
  }

  const data = await res.json();

  return data;
};

export default getSignupUserEmail;
