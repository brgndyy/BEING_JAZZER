'use client';

import { SettingModalPropsType } from 'types';
import useSelectSettingOption from '@/_hooks/useSelectSettingOption';
import useChordSettingStore from '@/_store/useChordSettingStore';
import useAccessTokenStore from '@/_store/useAccessTokenStore';
import { formLogo, settingForm } from './settingModal.css';
import OptionConfig from '../_setting/OptionConfig';
import SettingModalLogo from '../_setting/SettingModalLogo';
import SettingModalCloseButton from '../_setting/SettingModalCloseButton';
import SettingChangeButton from '../_setting/SettingChangeButton';

export default function SettingModal({ handleClose }: SettingModalPropsType) {
  const { chordSetting } = useChordSettingStore();
  const { handleSelectedUserSettingConfig } = useSelectSettingOption();

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
              handleSelectedUserSettingConfig={handleSelectedUserSettingConfig(setting.type)}
            />
          );
        })}

        <SettingChangeButton handleClose={handleClose} />
      </form>
    </div>
  );
}
