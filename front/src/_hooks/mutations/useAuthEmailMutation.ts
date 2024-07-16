import { useMutation } from '@tanstack/react-query';
import { sendAuthEmail } from '@/_apis/authAPI';
import SUCCESS_MESSAGE from '@/_constants/successMessage';
import { toast } from 'react-toastify';
import ERROR_MESSAGES from '@/_constants/errorMessages';
import { useState } from 'react';

type UseLoginMutation = {
  userEmail: string;
};

const useAuthEmailMutation = ({ userEmail }: UseLoginMutation) => {
  const [message, setMessage] = useState<string | undefined>();

  const { mutate: userSignUpMutation, isPending } = useMutation<void, Error, { userEmail: string }>(
    {
      mutationFn: ({ userEmail }) => sendAuthEmail(userEmail),
      onSuccess: () => {
        setMessage(SUCCESS_MESSAGE.send_mail);
      },
      onError: (error: Error) => {
        toast.error(ERROR_MESSAGES.FAIL_SEND_EMAIL);
        console.error(error.message);
      },
    },
  );

  const handleSendAuthEmail = (e: React.FormEvent) => {
    e.preventDefault();
    userSignUpMutation({ userEmail });
  };

  return { message, handleSendAuthEmail, isPending };
};

export default useAuthEmailMutation;
