'use client';

import { SettingModalPropsType } from 'types';
import defaultChordSetting from '@/_mocks/chordSettingOptions';
import React from 'react';
import extractTrueConfigs from '@/_utils/extractTrueConfigs';
import useSelectSettingOption from '@/_hooks/useSelectSettingOption';
import { formLogo, settingForm } from './settingModal.css';
import OptionConfig from '../_setting/OptionConfig';
import SettingModalLogo from '../_setting/SettingModalLogo';
import SettingModalCloseButton from '../_setting/SettingModalCloseButton';
import SettingChangeButton from '../_setting/SettingChangeButton';

export default function SettingModal({ handleClose }: SettingModalPropsType) {
  const { selectedSettingOption, handleCheckboxChange } = useSelectSettingOption(
    extractTrueConfigs(defaultChordSetting),
  );

  console.log(selectedSettingOption);

  return (
    <div className={formLogo}>
      <SettingModalLogo />
      <SettingModalCloseButton handleClose={handleClose} />

      <form className={settingForm}>
        {defaultChordSetting.map((setting) => {
          return (
            <OptionConfig
              key={setting.id}
              type={setting.type}
              config={setting.config}
              handleCheckboxChange={handleCheckboxChange}
              selectedSettingOption={selectedSettingOption}
            />
          );
        })}

        <SettingChangeButton handleClose={handleClose} />
      </form>
    </div>
  );
}
