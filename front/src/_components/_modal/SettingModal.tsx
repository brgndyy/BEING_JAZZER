import { SettingModalPropsType } from 'types';
import { AiOutlineClose } from 'react-icons/ai';
import defaultChordSetting from '@/_mocks/chordSettingOptions';
import { myStyle } from '@/_styles/vars.css';
import { formLogo, logo, closeButtonContainer, closeButton, settingForm } from './settingModal.css';
import OptionConfig from '../_setting/OptionConfig';

export default function SettingModal({ handleClose }: SettingModalPropsType) {
  return (
    <div className={formLogo}>
      <div className={`${logo} ${myStyle}`}>
        <h2>Setting</h2>
      </div>
      <div className={closeButtonContainer}>
        <AiOutlineClose className={`${closeButton} ${myStyle}`} onClick={handleClose} />
      </div>

      <form className={settingForm}>
        {defaultChordSetting.map((setting) => {
          return <OptionConfig key={setting.id} type={setting.type} config={setting.config} />;
        })}
      </form>
    </div>
  );
}
