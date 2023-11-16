import React from 'react';
import Link from 'next/link';
import {
  headerContainer,
  homeLink,
  headerCategoryContainer,
  loginCategory,
  settingCategory,
} from './header.css';

export default function Header() {
  return (
    <div className={headerContainer}>
      <Link href="/" className={homeLink}>
        <div>로고 이미지</div>
      </Link>
      <div className={headerCategoryContainer}>
        <div className={loginCategory}>
          <div>로그인 or 회원가입</div>
        </div>

        <div className={settingCategory}>
          <div>셋팅</div>
        </div>
      </div>
    </div>
  );
}
