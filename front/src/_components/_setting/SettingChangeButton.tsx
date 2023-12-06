import { SettingModalPropsType } from 'types';
import { BMHANNAAir } from '@/_styles/fonts/fonts';
import { buttonContainer, button } from '../_modal/settingModal.css';

export default function SettingChangeButton({ handleClose }: SettingModalPropsType) {
  return (
    <div className={buttonContainer}>
      <button onClick={handleClose} className={`${button} ${BMHANNAAir.className}`} type="button">
        설정 변경
      </button>
    </div>
  );
}
