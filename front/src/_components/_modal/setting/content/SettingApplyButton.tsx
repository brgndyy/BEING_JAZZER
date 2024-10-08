'use client';

import { buttonContainer } from '../settingModal.css';
import LoadingSpinner from '@/_components/_common/loadingSpinner/LoadingSpinner';
import Button from '@/_components/_common/button/Button';
import useUserChordSetting from '@/_hooks/useUserChordSetting';

type SettingApplyButtonProps = {
  handleClose: () => void;
};

export default function SettingApplyButton({ handleClose }: SettingApplyButtonProps) {
  const { isPending, handleTotalUserChordSetting } = useUserChordSetting({ handleClose });

  return (
    <>
      {isPending && <LoadingSpinner />}
      <div className={buttonContainer}>
        <Button variant="border" onClick={handleTotalUserChordSetting} type="button">
          설정 변경
        </Button>
      </div>
    </>
  );
}
