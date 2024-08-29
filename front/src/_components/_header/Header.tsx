'use client';

import Link from 'next/link';
import { ChordSetting, UserInfo } from '@/_types';
import { useTheme } from '@/_hooks/useTheme';
import { myStyle } from '@/_styles/vars.css';
import { useEffect } from 'react';
import useAccessTokenStore from '@/_store/useAccessTokenStore';
import MainLogoImage from '../_common/images/bannerImages/MainLogoImage';
import {
  headerContainer,
  homeLink,
  headerCategoryContainer,
  loginOrSignUpCategory,
  settingCategory,
} from './header.css';

import ThemeToggleInput from '../_theme/ThemeToggleInput';
import UserProfile from '../_profile/UserProfile';
import SettingModal from '../_modal/setting/SettingModal';
import LoginModal from '../_modal/login/LoginModal';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({});

export interface HeaderProps {
  currentTheme: string;
  userInfo?: UserInfo;
  chordSetting: ChordSetting[];
  accessToken?: string;
}

export default function Header({ currentTheme, userInfo, chordSetting, accessToken }: HeaderProps) {
  const { darkTheme, handleToggleTheme } = useTheme(currentTheme);
  const updateAccessToken = useAccessTokenStore((state) => state.updateAccessToken);

  useEffect(() => {
    if (accessToken) {
      updateAccessToken(accessToken);
    }
  }, [accessToken, chordSetting, updateAccessToken]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`${headerContainer} ${myStyle}`}>
        <Link href="/" className={homeLink} replace>
          <MainLogoImage darkTheme={darkTheme} />
        </Link>
        <div className={headerCategoryContainer}>
          <div className={loginOrSignUpCategory}>
            {userInfo ? <UserProfile userInfo={userInfo} /> : <LoginModal />}
          </div>
          <ThemeToggleInput darkTheme={darkTheme} handleToggleTheme={handleToggleTheme} />
          <div className={settingCategory}>
            <SettingModal chordSetting={chordSetting} />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}
