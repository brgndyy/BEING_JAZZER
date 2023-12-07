import { SearchParamsType } from 'types';
import RegisterFunnel from '@/_components/_register/RegisterFunnel';
import getEncryptedCodeFromParams from '@/_services/auth/getEncryptedCodeFromParams';
import PATH_ROUTES from '@/_constants/pathRoutes';
import getUserInfoByEncryptedCode from '@/_services/auth/getUserInfoByEncryptedCode';
import { notFound } from 'next/navigation';

export default async function RegisterPage({ searchParams }: SearchParamsType) {
  const encryptedCode = getEncryptedCodeFromParams({ searchParams });
  const userInfo = await getUserInfoByEncryptedCode(PATH_ROUTES.register_user_info, encryptedCode);
  const { userEmail } = userInfo;

  if (!userEmail) {
    return notFound();
  }

  return (
    <>
      <RegisterFunnel userEmail={userEmail} />;
    </>
  );
}
