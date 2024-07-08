import useSelectSettingOption from '@/_hooks/useSelectSettingOption';
import { BMHANNAAir } from '@/_styles/fonts/fonts';
import { buttonContainer, button } from '../settingModal.css';
import useChangeUserChordSetting from '@/_hooks/mutations/useChangeUserChordSetting';
import useAccessTokenStore from '@/_store/accessTokenStore';
import { toast } from 'react-toastify';
import LoadingSpinner from '@/_components/_common/loadingSpinner/LoadingSpinner';

type Props = {
  handleClose: () => void;
};

export default function SettingApplyButton({ handleClose }: Props) {
  const { chordSetting } = useSelectSettingOption();
  const { accessToken } = useAccessTokenStore();
  const { handleUserChordSetting, isPending } = useChangeUserChordSetting({
    handleClose,
    initialChordSetting: chordSetting,
    accessToken,
  });

  const handleTotalUserChordSetting = () => {
    if (accessToken) {
      handleUserChordSetting({ accessToken, chordSetting });
    } else {
      // TODO 비회원일때 코드 설정을 변경하면 발생할 로직 설정
      toast.error('에러가 발생했어요!');
    }
  };

  return (
    <>
      {isPending && <LoadingSpinner />}
      <div className={buttonContainer}>
        <button
          onClick={handleTotalUserChordSetting}
          className={`${button} ${BMHANNAAir.className}`}
          type="button"
        >
          설정 변경
        </button>
      </div>
    </>
  );
}
