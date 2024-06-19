import useSelectSettingOption from '@/_hooks/useSelectSettingOption';
import { BMHANNAAir } from '@/_styles/fonts/fonts';
import { buttonContainer, button } from '../settingModal.css';

export default function SettingApplyButton() {
  const { chordSetting } = useSelectSettingOption();

  const applyChordSettingMutation = () => {
    // return useMutation()
  };

  console.log('chordSetting : ', chordSetting);

  return (
    <div className={buttonContainer}>
      <button
        onClick={applyChordSettingMutation}
        className={`${button} ${BMHANNAAir.className}`}
        type="button"
      >
        설정 변경
      </button>
    </div>
  );
}
