import useSelectSettingOption from '@/_hooks/useSelectSettingOption';
import { BMHANNAAir } from '@/_styles/fonts/fonts';
import { buttonContainer, button } from '../settingModal.css';
import useChangeUserChordSetting from '@/_hooks/mutations/useChangeUserChordSetting';
import useAccessTokenStore from '@/_store/useAccessTokenStore';
import { toast } from 'react-toastify';

type Props = {
  handleClose: () => void;
};

export default function SettingApplyButton({ handleClose }: Props) {
  const { chordSetting } = useSelectSettingOption();
  const { accessToken } = useAccessTokenStore();
  const { handleUserChordSetting } = useChangeUserChordSetting({ handleClose });

  const handleTotalUserChordSetting = () => {
    if (accessToken) {
      handleUserChordSetting({ accessToken, chordSetting });
    } else {
      toast.error('에러가 발생했어요!');
    }
  };

  return (
    <div className={buttonContainer}>
      <button
        onClick={handleTotalUserChordSetting}
        className={`${button} ${BMHANNAAir.className}`}
        type="button"
      >
        설정 변경
      </button>
    </div>
  );
}
