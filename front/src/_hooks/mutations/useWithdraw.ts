import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { PAGE_ROUTES } from '@/_constants/routes';
import { withdrawAccount } from '@/_apis/authAPI';
import { toast } from 'react-toastify';
import ERROR_MESSAGES from '@/_constants/errorMessages';

const useWithdraw = (accessToken: string) => {
  const router = useRouter();

  const { mutate: withdrawMutation } = useMutation({
    mutationFn: withdrawAccount,
    onSuccess: () => {
      router.refresh();
      router.replace(PAGE_ROUTES.main);
    },
    onError: (error: Error) => {
      toast.error(ERROR_MESSAGES.fail_withdraw);
      console.error(error.message);
    },
  });

  const handleWithdraw = () => {
    withdrawMutation(accessToken);
  };

  return { handleWithdraw };
};

export default useWithdraw;
