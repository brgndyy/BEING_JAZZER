/* eslint-disable react/no-danger */

import '../../globals.css';
import { getThemeCookieValue } from '@/_utils/getThemeCookieValue';
import { generateThemeScript } from '@/_utils/generateThemeScript';
import sanitizeHtml from '@/_utils/sanitizeHtml';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from '@/_components/_common/cards/Card';
import { myFontClass } from '@/app/font.css';
import type { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Being JAZZER 회원 가입',
  description: 'Being JAZZER의 회원 가입 페이지입니다.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function RegisterPageLayout({ children }: { children: React.ReactNode }) {
  const currentTheme = getThemeCookieValue();
  const sanitizedThemeScript = sanitizeHtml(generateThemeScript(currentTheme));

  return (
    <html lang="en">
      <body suppressHydrationWarning className={myFontClass}>
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
        </Card>
      </body>
    </html>
  );
}
