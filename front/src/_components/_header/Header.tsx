'use client';

import Link from 'next/link';
import { HeaderPropsType } from 'types';
import { useTheme } from '@/_hooks/useTheme';
import { myStyle } from '@/_styles/vars.css';
// import DarkBannerImage from '../_composables/images/bannerImages/DarkBannerImage';
// import WhiteBannerImage from '../_composables/images/bannerImages/WhiteBannerImage';
import DarkBannerImage from 'public/images/svgs/DarkBanner.svg';
import WhiteBannerImage from 'public/images/svgs/WhiteBanner.svg';
import {
  headerContainer,
  homeLink,
  headerCategoryContainer,
  loginOrSignUpCategory,
  settingCategory,
} from './header.css';

import Setting from '../_setting/Setting';
import ThemeToggleInput from '../_theme/ThemeToggleInput';
import Login from '../_auth/Login';

export default function Header({ currentTheme }: HeaderPropsType) {
  const { darkTheme, themeToggleHandler } = useTheme(currentTheme);

  return (
    <div className={`${headerContainer} ${myStyle}`}>
      <Link href="/" className={homeLink}>
        {/* {darkTheme ? (
          <DarkBannerImage width={100} height={70} />
        ) : (
          <WhiteBannerImage width={100} height={70} />
        )} */}
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
