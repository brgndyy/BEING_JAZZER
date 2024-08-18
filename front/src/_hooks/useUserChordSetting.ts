import ERROR_MESSAGES from '@/_constants/errorMessages';
import { PAGE_ROUTES } from '@/_constants/routes';
import useAccessTokenStore from '@/_store/useAccessTokenStore';
import { usePathname } from 'next/navigation';
import { toast } from 'react-toastify';
import useChangeUserChordSetting from './mutations/useChangeUserChordSetting';
import useSelectSettingOption from './useSelectSettingOption';
import validateMinimumChordSetting from '@/_utils/validateMinimumChordSetting';

interface UserChordSettingOptions {
  handleClose: () => void;
}

const useUserChordSetting = ({ handleClose }: UserChordSettingOptions) => {
  const { chordSetting, initializeDefaultChordSetting } = useSelectSettingOption();
  const pathName = usePathname();
  const isPlayChordPage = pathName === PAGE_ROUTES.playChord;

  const { accessToken } = useAccessTokenStore();
  const isCompletedMinimumSetting = validateMinimumChordSetting(chordSetting);
  const { handleUserChordSetting, isPending } = useChangeUserChordSetting({
    handleClose,
    initialChordSetting: chordSetting,
    accessToken,
  });

  const handleTotalUserChordSetting = () => {
    if (isCompletedMinimumSetting) {
      if (accessToken) {
        handleUserChordSetting();
        isPlayChordPage && window.location.reload();
      } else {
        handleClose();
        initializeDefaultChordSetting();
      }
    } else {
      toast.error(ERROR_MESSAGES.not_satisfied_chord_setting);
    }
  };

  return { isPending, handleTotalUserChordSetting };
};

export default useUserChordSetting;
