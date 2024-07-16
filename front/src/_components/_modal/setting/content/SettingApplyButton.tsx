import useSelectSettingOption from '@/_hooks/useSelectSettingOption';
import { BMHANNAAir } from '@/_styles/fonts/fonts';
import { buttonContainer, button } from '../settingModal.css';
import useChangeUserChordSetting from '@/_hooks/mutations/useChangeUserChordSetting';
import useAccessTokenStore from '@/_store/accessTokenStore';
import { toast } from 'react-toastify';
import LoadingSpinner from '@/_components/_common/loadingSpinner/LoadingSpinner';
import { ChordSetting, ChordSettingKey } from '@/_types';
import ERROR_MESSAGES from '@/_constants/errorMessages';
import useChangeDefaultChordSetting from '@/_hooks/mutations/useChangeDefaultChordSetting';

type Props = {
  handleClose: () => void;
};

const isValidSetting = (chordSetting: ChordSetting[], type: ChordSettingKey) => {
  return chordSetting.some(
    (setting) =>
      setting.type === type &&
      Object.values(setting.config).some((config) => config.isAvailable && config.isSelected),
  );
};

const validateMinimumSetting = (chordSetting: ChordSetting[]) => {
  const requiredTypes: ChordSettingKey[] = ['Key', 'Chord', 'Tension'];
  return requiredTypes.every((type) => isValidSetting(chordSetting, type));
};

export default function SettingApplyButton({ handleClose }: Props) {
  const { chordSetting } = useSelectSettingOption();
  const { accessToken } = useAccessTokenStore();
  const isCompletedMinimumSetting = validateMinimumSetting(chordSetting);
  const { handleUserChordSetting, isPending: isUserChordChangePending } = useChangeUserChordSetting(
    {
      handleClose,
      initialChordSetting: chordSetting,
      accessToken,
    },
  );

  const handleTotalUserChordSetting = () => {
    if (isCompletedMinimumSetting) {
      if (accessToken) {
        handleUserChordSetting({ accessToken, chordSetting });
      } else {
        // TODO 비회원일때 코드 설정을 변경하면 발생할 로직 설정
        toast.error('에러가 발생했어요!');
      }
    } else {
      toast.error(ERROR_MESSAGES.not_satisfied_chord_setting);
    }
  };

  return (
    <>
      {isUserChordChangePending && <LoadingSpinner />}
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
