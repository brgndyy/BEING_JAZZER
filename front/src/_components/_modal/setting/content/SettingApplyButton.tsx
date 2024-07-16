'use client';

import useSelectSettingOption from '@/_hooks/useSelectSettingOption';
import { BMHANNAAir } from '@/_styles/fonts/fonts';
import { buttonContainer, button } from '../settingModal.css';
import useChangeUserChordSetting from '@/_hooks/mutations/useChangeUserChordSetting';
import useAccessTokenStore from '@/_store/useAccessTokenStore';
import { toast } from 'react-toastify';
import LoadingSpinner from '@/_components/_common/loadingSpinner/LoadingSpinner';
import { ChordSetting, ChordSettingKey } from '@/_types';
import ERROR_MESSAGES from '@/_constants/errorMessages';
import { usePathname } from 'next/navigation';
import { PAGE_ROUTES } from '@/_constants/routes';

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
  const { chordSetting, initializeDefaultChordSetting } = useSelectSettingOption();
  const pathName = usePathname();
  const isPlayChordPage = pathName === PAGE_ROUTES.playChord;

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
        isPlayChordPage && window.location.reload();
      } else {
        handleClose();
        initializeDefaultChordSetting();
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
