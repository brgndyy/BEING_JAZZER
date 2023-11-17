import React from 'react';
import Link from 'next/link';
import {
  headerContainer,
  homeLink,
  headerCategoryContainer,
  loginCategory,
  settingCategory,
  toggleInput,
  toggleLabel,
} from './header.css';
import WhiteBannerImage from '../_composables/banner/WhiteBannerImage';

export default function Header() {
  return (
    <div className={headerContainer}>
      <Link href="/" className={homeLink}>
        <WhiteBannerImage />
      </Link>
      <div className={headerCategoryContainer}>
        <div className={loginCategory}>
          <div>로그인</div>
        </div>

        <input type="checkbox" id="darkmodeToggle" className={toggleInput} />
        <label htmlFor="darkmodeToggle" className={`${toggleLabel}`} />

        <div className={settingCategory}>
          <div>셋팅</div>
        </div>
      </div>
    </div>
  );
}
