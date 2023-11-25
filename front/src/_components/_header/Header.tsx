'use client';

import React from 'react';
import Link from 'next/link';
import { HeaderPropsType } from 'types';
import { useTheme } from '@/_hooks/useTheme';
import { myStyle } from '@/_styles/vars.css';
import {
  headerContainer,
  homeLink,
  headerCategoryContainer,
  loginOrSignUpCategory,
  settingCategory,
} from './header.css';
import WhiteBannerImage from '../_composables/images/bannerImages/WhiteBannerImage';
import DarkBannerImage from '../_composables/images/bannerImages/DarkBannerImage';
import Setting from '../_setting/Setting';
import ThemeToggleInput from '../_theme/ThemeToggleInput';
import Login from '../_auth/Login';

export default function Header({ currentTheme }: HeaderPropsType) {
  const { darkTheme, themeToggleHandler } = useTheme(currentTheme);

  return (
    <div className={`${headerContainer} ${myStyle}`}>
      <Link href="/" className={homeLink}>
        {darkTheme ? <DarkBannerImage /> : <WhiteBannerImage />}
      </Link>
      <div className={headerCategoryContainer}>
        <div className={loginOrSignUpCategory}>
          <Login />
        </div>
        <ThemeToggleInput darkTheme={darkTheme} themeToggleHandler={themeToggleHandler} />
        <div className={settingCategory}>
          <Setting />
        </div>
      </div>
    </div>
  );
}
