import { getUserInfoByAccessToken } from '@/_apis/authAPI';
import getAccessTokenValue from '@/_services/token/getAccessTokenValue';
import Link from 'next/link';
import UserInfo from '@/_components/_setting/UserInfo';
import SettingContainer from '@/_components/_setting/SettingContainer';

export default async function UserSettingPage() {
  const accessToken = getAccessTokenValue();
  const userInfo = await getUserInfoByAccessToken(accessToken);

  if (!userInfo) {
    return (
      <>
        <div>로그인 후 이용해주세요!</div>
        <Link href={'/'}>로그인 하러 가기</Link>
      </>
    );
  }

  return (
    <SettingContainer>
      <UserInfo
        userEmail={userInfo.userEmail}
        userName={userInfo.userName}
        profileImageUrl={userInfo.userProfileImageSrc}
      />
    </SettingContainer>
  );
}
