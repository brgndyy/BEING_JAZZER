import { ChangeUserChordSetting } from '@/_types';
import { changeUserChordSetting } from '@/_apis/chordSettingAPI';
import { toast } from 'react-toastify';
import ERROR_MESSAGES from '@/_constants/errorMessages';
import { useCachedMutation } from './useCachedMutate';
import SUCCESS_MESSAGE from '@/_constants/successMessage';

interface HookProps {
  handleClose: () => void;
  initialChordSetting: ChangeUserChordSetting['chordSetting'];
  accessToken?: string;
}

const useChangeUserChordSetting = ({
  handleClose,
  initialChordSetting,
  accessToken = '',
}: HookProps) => {
  const { mutate: changeChordSettingMutation } = useCachedMutation<
    void,
    Error,
    ChangeUserChordSetting
  >(({ accessToken, chordSetting }) => changeUserChordSetting({ accessToken, chordSetting }), {
    initialValue: { accessToken, chordSetting: initialChordSetting },
    onError: () => {
      toast.error(ERROR_MESSAGES.fail_get_chord_setting);
    },
    onSuccess: () => {
      toast.success(SUCCESS_MESSAGE.SET_USER_CHORD);
    },
    onSettled: () => {
      handleClose();
    },
  });

  const handleUserChordSetting = ({ accessToken, chordSetting }: ChangeUserChordSetting) => {
    changeChordSettingMutation({ accessToken, chordSetting });
  };

  return { handleUserChordSetting };
};

export default useChangeUserChordSetting;
