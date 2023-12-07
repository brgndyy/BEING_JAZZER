'use client';

import Link from 'next/link';
import { HeaderPropsType } from 'types';
import { useTheme } from '@/_hooks/useTheme';
import { myStyle } from '@/_styles/vars.css';
import useChordSettingStore from '@/_store/useChordSettingStore';
import { useEffect } from 'react';
import extractTrueConfigs from '@/_utils/extractTrueConfigs';
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

export default function Header({ currentTheme, userInfo, chordSetting }: HeaderPropsType) {
  const { darkTheme, themeToggleHandler } = useTheme(currentTheme);
  const { updateChordSetting, updateSelectedSettingOption } = useChordSettingStore();

  useEffect(() => {
    updateChordSetting(chordSetting);
    updateSelectedSettingOption(extractTrueConfigs(chordSetting));
  }, [chordSetting, updateChordSetting, updateSelectedSettingOption]);

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
          <Setting />
        </div>
      </div>
    </div>
  );
}
