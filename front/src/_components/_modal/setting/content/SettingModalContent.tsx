import { formLogo, settingForm } from '@/_components/_modal/setting/settingModal.css';
import useSelectSettingOption from '@/_hooks/useSelectSettingOption';
import { myStyle } from '@/_styles/vars.css';
import OptionConfig from './OptionConfig';
import SettingApplyButton from './SettingApplyButton';
import SettingModalCloseButton from './SettingModalCloseButton';
import SettingModalLogo from './SettingModalLogo';
import { modalContainer } from '../../modal.css';

type Props = {
  handleClose: () => void;
};

export default function SettingModalContent({ handleClose }: Props) {
  const { chordSetting, handleSelectedUserSettingConfig } = useSelectSettingOption();

  return (
    <div className={`${modalContainer} ${myStyle}`}>
      <div className={`${formLogo}`}>
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

          <SettingApplyButton handleClose={handleClose} />
        </form>
      </div>
    </div>
  );
}
