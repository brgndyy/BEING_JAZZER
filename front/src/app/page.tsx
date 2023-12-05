import Header from '@/_components/_header/Header';
import { getThemeCookieValue } from '@/_utils/getThemeCookieValue';
import ContentCard from '@/_components/_composables/cards/ContentCard';
import getAccessTokenValue from '@/_services/token/getAccessTokenValue';
import getUserInfoByAccessToken from '@/_services/auth/getUserInfoByAccessToken';

export default async function Home() {
  const currentTheme = getThemeCookieValue();
  const accessToken = getAccessTokenValue();
  const userInfo = await getUserInfoByAccessToken(accessToken);

  return (
    <>
      <Header currentTheme={currentTheme} userInfo={userInfo} />
      <ContentCard>
        <div>하이</div>
      </ContentCard>
    </>
  );
}
