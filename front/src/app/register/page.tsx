import { SearchParamsType } from 'types';
import getSignupUserEmail from '@/_services/getSignupUserEmail';
import RegisterFunnel from '@/_components/_register/RegisterFunnel';
import getEncryptedCodeFromParams from '@/_services/getEncryptedCodeFromParams';
import NotFound from '../not-found';

export default async function RegisterPage({ searchParams }: SearchParamsType) {
  const encryptedCode = getEncryptedCodeFromParams({ searchParams });
  const userInfo = await getSignupUserEmail(encryptedCode);
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
