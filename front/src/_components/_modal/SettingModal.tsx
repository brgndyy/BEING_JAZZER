'use client';

import { SettingModalPropsType } from 'types';
import React, { useEffect } from 'react';
import useSelectSettingOption from '@/_hooks/useSelectSettingOption';
import useChordSettingStore from '@/_store/useChordSettingStore';
import useAccessTokenStore from '@/_store/useAccessTokenStore';
import { formLogo, settingForm } from './settingModal.css';
import OptionConfig from '../_setting/OptionConfig';
import SettingModalLogo from '../_setting/SettingModalLogo';
import SettingModalCloseButton from '../_setting/SettingModalCloseButton';
import SettingChangeButton from '../_setting/SettingChangeButton';

export default function SettingModal({ handleClose }: SettingModalPropsType) {
  const chordSetting = useChordSettingStore((state) => state.chordSetting);
  const { handleCheckboxChange } = useSelectSettingOption();
  const { accessToken } = useAccessTokenStore();

  useEffect(() => {
    console.log(chordSetting);
  }, [chordSetting]);

  return (
    <div className={formLogo}>
      <SettingModalLogo />
      <SettingModalCloseButton handleClose={handleClose} />

      <form className={settingForm}>
        {chordSetting.map((setting) => {
          return (
            <OptionConfig
              key={setting.id}
              type={setting.type}
              config={setting.config}
              handleCheckboxChange={handleCheckboxChange}
            />
          );
        })}

        <SettingChangeButton handleClose={handleClose} />
      </form>
    </div>
  );
}
