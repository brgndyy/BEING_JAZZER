'use client';

import React from 'react';
import Link from 'next/link';
import { IoSettingsSharp } from 'react-icons/io5';
import { HeaderPropsType } from 'types/header';
import { useTheme } from '@/_hooks/useTheme';
import { myStyle } from '@/_styles/vars.css';
import {
  headerContainer,
  homeLink,
  headerCategoryContainer,
  loginCategory,
  settingIcon,
  settingCategory,
  toggleInput,
  toggleLabel,
  toggleLabelChecked,
} from './header.css';
import WhiteBannerImage from '../_composables/banner/WhiteBannerImage';

export default function Header({ currentTheme }: HeaderPropsType) {
  const { darkTheme, themeToggleHandler } = useTheme(currentTheme);

  return (
    <div className={`${headerContainer} ${myStyle}`}>
      <Link href="/" className={homeLink}>
        <WhiteBannerImage />
      </Link>
      <div className={headerCategoryContainer}>
        <div className={loginCategory}>
          <div>로그인</div>
        </div>

        <input
          type="checkbox"
          id="darkmodeToggle"
          className={toggleInput}
          onChange={themeToggleHandler}
        />
        <label
          htmlFor="darkmodeToggle"
          className={`${toggleLabel} ${darkTheme ? toggleLabelChecked : ''}`}
        />

        <div className={settingCategory}>
          <IoSettingsSharp className={settingIcon} />
        </div>
      </div>
    </div>
  );
}
