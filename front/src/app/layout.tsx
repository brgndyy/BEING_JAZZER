/* eslint-disable react/no-danger */

import type { Metadata } from 'next';
import './globals.css';
import Card from '@/_components/_composables/cards/Card';
import Header from '@/_components/_header/Header';
import ContentCard from '@/_components/_composables/cards/ContentCard';
import { getThemeCookieValue } from '@/_utils/getThemeCookieValue';
import { generateThemeScript } from '@/_utils/generateThemeScript';
import sanitizeHtml from '@/_utils/sanitizeHtml';

export const metadata: Metadata = {
  title: 'BEING JAZZER',
  description: '랜덤으로 코드를 연습할수 있는 사이트입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const currentTheme = getThemeCookieValue();
  const sanitizedThemeScript = sanitizeHtml(generateThemeScript(currentTheme));

  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: sanitizedThemeScript,
          }}
        />
        <Card>
          <Header currentTheme={currentTheme} />
          <ContentCard>{children}</ContentCard>
          <div id="portal"></div>
        </Card>
      </body>
    </html>
  );
}
