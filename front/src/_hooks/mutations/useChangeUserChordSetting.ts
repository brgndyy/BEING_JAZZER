import { ChangeUserChordSetting } from '@/_types';
import { changeUserChordSetting } from '@/_apis/chordSettingAPI';
import { toast } from 'react-toastify';
import ERROR_MESSAGES from '@/_constants/errorMessages';
import { useCachedMutation } from './useCachedMutate';
import SUCCESS_MESSAGE from '@/_constants/successMessage';

interface ChangeUserChordSettingOptions {
  handleClose: () => void;
  initialChordSetting: ChangeUserChordSetting['initialChordSetting'];
  accessToken?: string;
}

const useChangeUserChordSetting = ({
  handleClose,
  initialChordSetting,
  accessToken = '',
}: ChangeUserChordSettingOptions) => {
  const { mutate: changeChordSettingMutation, isPending } = useCachedMutation({
    queryFn: changeUserChordSetting,
    initialValue: { accessToken, initialChordSetting },
    onError: () => {
      toast.error(ERROR_MESSAGES.fail_get_chord_setting);
    },
    onSuccess: () => {
      toast.success(SUCCESS_MESSAGE.set_user_chord);
    },
    onSettled: () => {
      handleClose();
    },
  });

  const handleUserChordSetting = () => {
    changeChordSettingMutation({ accessToken, initialChordSetting });
  };

  return { handleUserChordSetting, isPending };
};

export default useChangeUserChordSetting;
