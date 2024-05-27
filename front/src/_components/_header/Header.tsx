'use client';

import Link from 'next/link';
import { HeaderPropsType } from 'types';
import { useTheme } from '@/_hooks/useTheme';
import { myStyle } from '@/_styles/vars.css';
import useChordSettingStore from '@/_store/useChordSettingStore';
import { useEffect } from 'react';
import useAccessTokenStore from '@/_store/useAccessTokenStore';
import MainLogoImage from '../_composables/images/bannerImages/MainLogoImage';
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
import ModifiedModal from '../_setting/modifiedSettingModal/ModifiedModal';

export default function Header({
  currentTheme,
  userInfo,
  chordSetting,
  accessToken,
}: HeaderPropsType) {
  const { darkTheme, themeToggleHandler } = useTheme(currentTheme);
  const { updateChordSetting } = useChordSettingStore();
  const updateAccessToken = useAccessTokenStore((state) => state.updateAccessToken);

  useEffect(() => {
    updateChordSetting(chordSetting);
    if (accessToken) {
      updateAccessToken(accessToken);
    }
  }, [accessToken, chordSetting, updateAccessToken, updateChordSetting]);

  return (
    <div className={`${headerContainer} ${myStyle}`}>
      <Link href="/" className={homeLink}>
        <MainLogoImage darkTheme={darkTheme} />
      </Link>
      <div className={headerCategoryContainer}>
        <div className={loginOrSignUpCategory}>
          {userInfo ? <UserProfile userInfo={userInfo} /> : <Login />}
        </div>
        <ThemeToggleInput darkTheme={darkTheme} themeToggleHandler={themeToggleHandler} />
        <div className={settingCategory}>
          <ModifiedModal />
        </div>
      </div>
    </div>
  );
}
