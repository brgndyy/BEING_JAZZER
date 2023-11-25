import { SearchParamsType } from 'types';
import getSignupUserEmail from '@/_service/getSignupUserEmail';
import RegisterForm from '@/_components/_register/RegisterForm';

export default async function RegisterPage({ searchParams }: SearchParamsType) {
  const encryptedCode = (searchParams ? searchParams.code : '').replace(/ /g, '+');
  const userInfo = await getSignupUserEmail(encryptedCode);
  const { userEmail } = userInfo;
  return (
    <>
      <RegisterForm userEmail={userEmail} />;
    </>
  );
}
