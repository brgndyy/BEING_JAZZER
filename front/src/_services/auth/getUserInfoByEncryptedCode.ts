import ERROR_MESSAGES from '@/_constants/errorMessages';

const getUserInfoByEncryptedCode = async (path: string, encryptedCode: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DEFAULT_BE_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ encryptedCode }),
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error(ERROR_MESSAGES.fail_get_user_info);
  }

  const data = await res.json();

  return data;
};

export default getUserInfoByEncryptedCode;
