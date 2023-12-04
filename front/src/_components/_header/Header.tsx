'use client';

import Link from 'next/link';
import { HeaderPropsType } from 'types';
import { useTheme } from '@/_hooks/useTheme';
import { myStyle } from '@/_styles/vars.css';
// import DarkBannerImage from '../_composables/images/bannerImages/DarkBannerImage';
// import WhiteBannerImage from '../_composables/images/bannerImages/WhiteBannerImage';
import DarkBannerImage from 'public/assets/svgs/DarkBanner.svg';
import WhiteBannerImage from 'public/assets/svgs/WhiteBanner.svg';
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
import UserProfile from '../_profile/UserProfile';

export default function Header({ currentTheme, userInfo }: HeaderPropsType) {
  const { darkTheme, themeToggleHandler } = useTheme(currentTheme);

  return (
    <div className={`${headerContainer} ${myStyle}`}>
      <Link href="/" className={homeLink}>
        {darkTheme ? (
          <DarkBannerImage width={100} height={100} />
        ) : (
          <WhiteBannerImage width={100} height={100} />
        )}
      </Link>
      <div className={headerCategoryContainer}>
        <div className={loginOrSignUpCategory}>
          {userInfo ? <UserProfile userInfo={userInfo} /> : <Login />}
        </div>
        <ThemeToggleInput darkTheme={darkTheme} themeToggleHandler={themeToggleHandler} />
        <div className={settingCategory}>
          <Setting />
        </div>
      </div>
    </div>
  );
}
