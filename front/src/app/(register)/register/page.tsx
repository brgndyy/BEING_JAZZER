import { SearchParams } from '@/_types';
import RegisterFunnel from '@/_components/_register/RegisterFunnel';
import getEncryptedCodeFromParams from '@/_utils/getEncryptedCodeFromParams';
import { API_ROUTES } from '@/_constants/routes';
import { getUserInfoByEncryptedCode } from '@/_apis/authAPI';
import { notFound } from 'next/navigation';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/_components/_header/Header';

export default async function RegisterPage({ searchParams }: SearchParams) {
  const encryptedCode = getEncryptedCodeFromParams({ searchParams });
  const userInfo = await getUserInfoByEncryptedCode(API_ROUTES.register_user_info, encryptedCode);
  const { userEmail } = userInfo;

  if (!userEmail) {
    return notFound();
  }

  return (
    <QueryClientProvider client={queryClient}>
      <RegisterFunnel userEmail={userEmail} />;
    </QueryClientProvider>
  );
}
