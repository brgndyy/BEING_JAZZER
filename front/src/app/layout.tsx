import type { Metadata } from 'next';
import './globals.css';
import { myStyle } from '@/_styles/vars.css';
import Card from '@/_components/_composables/Card';

export const metadata: Metadata = {
  title: 'BEING JAZZER',
  description: '랜덤으로 코드를 연습할수 있는 사이트입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={myStyle}>
        <Card>{children}</Card>
      </body>
    </html>
  );
}
