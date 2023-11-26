import Header from '@/_components/_header/Header';
import { getThemeCookieValue } from '@/_utils/getThemeCookieValue';
import ContentCard from '@/_components/_composables/cards/ContentCard';

export default function Home() {
  const currentTheme = getThemeCookieValue();
  return (
    <>
      <Header currentTheme={currentTheme} />
      <ContentCard></ContentCard>
    </>
  );
}
