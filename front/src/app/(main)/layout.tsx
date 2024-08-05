/* eslint-disable react/no-danger */

import type { Metadata } from 'next/types';
import '../globals.css';
import Card from '@/_components/_common/cards/Card';
import { getThemeCookieValue } from '@/_utils/getThemeCookieValue';
import { generateThemeScript } from '@/_utils/generateThemeScript';
import sanitizeHtml from '@/_utils/sanitizeHtml';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getAccessTokenValue from '@/_services/token/getAccessTokenValue';
import { getUserInfoByAccessToken } from '@/_apis/authAPI';
import ContentCard from '@/_components/_common/cards/ContentCard';
import Header from '@/_components/_header/Header';
import defaultChordSetting from '@/_mocks/chordSettingOptions';
import { getUserChordSetting } from '@/_apis/chordSettingAPI';
import { myFont } from '@/assets/fonts/font';

export const metadata: Metadata = {
  title: 'Being JAZZER',
  description: '랜덤으로 코드를 연습할수 있는 사이트입니다.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentTheme = getThemeCookieValue();
  const sanitizedThemeScript = sanitizeHtml(generateThemeScript(currentTheme));
  const accessToken = getAccessTokenValue();
  const userInfo = await getUserInfoByAccessToken(accessToken);
  const chordSetting =
    accessToken && userInfo ? await getUserChordSetting(accessToken) : defaultChordSetting;

  return (
    <html lang="en">
      <body suppressHydrationWarning className={myFont.className}>
        <script
          dangerouslySetInnerHTML={{
            __html: sanitizedThemeScript,
          }}
        />
        <Card>
          <ToastContainer
            autoClose={1500}
            position="top-right"
            hideProgressBar={false}
            theme={currentTheme}
          />
          <Header
            currentTheme={currentTheme}
            userInfo={userInfo}
            chordSetting={chordSetting}
            accessToken={accessToken}
          />
          <ContentCard>{children}</ContentCard>
          <div id="portal" />
          <div id="spinner" />
        </Card>
      </body>
    </html>
  );
}
