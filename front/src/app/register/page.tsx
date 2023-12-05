import { SearchParamsType } from 'types';
import RegisterFunnel from '@/_components/_register/RegisterFunnel';
import getEncryptedCodeFromParams from '@/_services/auth/getEncryptedCodeFromParams';
import PATH_ROUTES from '@/_constants/pathRoutes';
import getUserInfoByEncryptedCode from '@/_services/auth/getUserInfoByEncryptedCode';
import NotFound from '../not-found';

export default async function RegisterPage({ searchParams }: SearchParamsType) {
  const encryptedCode = getEncryptedCodeFromParams({ searchParams });
  const userInfo = await getUserInfoByEncryptedCode(PATH_ROUTES.register_user_info, encryptedCode);
  const { userEmail } = userInfo;

  if (!userEmail) {
    return <NotFound />;
  }

  return (
    <>
      <RegisterFunnel userEmail={userEmail} />;
    </>
  );
}
