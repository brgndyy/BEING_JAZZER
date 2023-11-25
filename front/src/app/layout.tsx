/* eslint-disable react/no-danger */

import type { Metadata } from 'next';
import './globals.css';
import Card from '@/_components/_composables/cards/Card';
import { getThemeCookieValue } from '@/_utils/getThemeCookieValue';
import { generateThemeScript } from '@/_utils/generateThemeScript';
import sanitizeHtml from '@/_utils/sanitizeHtml';
import { ToastContainer } from 'react-toastify';

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
          <ToastContainer
            autoClose={1500}
            position="top-right"
            hideProgressBar={false}
            theme={currentTheme}
          />
          {children}
          <div id="portal" />
          <div id="toast-root" />
        </Card>
      </body>
    </html>
  );
}
