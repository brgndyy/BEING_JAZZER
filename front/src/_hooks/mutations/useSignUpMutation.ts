import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import ERROR_MESSAGES from '@/_constants/errorMessages';
import { SignUpParams } from '@/_types';
import { userSignUp } from '@/app/actions';
import { useRouter } from 'next/navigation';
import { PAGE_ROUTES } from '@/_constants/routes';

const useSignUpMutation = ({ userName, userEmail, userImage }: SignUpParams) => {
  const router = useRouter();
  const { mutate: userSignUpMutation } = useMutation({
    mutationFn: userSignUp,
    onSuccess: () => {
      router.refresh();
      router.push(PAGE_ROUTES.main);
    },
    onError: (error: Error) => {
      toast.error(ERROR_MESSAGES.FAIL_SIGN_UP);
      console.error(error.message);
    },
  });

  const handleUserSignUp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const signUpFormData = new FormData();
    signUpFormData.append('userName', userName);
    signUpFormData.append('userEmail', userEmail);

    if (userImage) {
      signUpFormData.append('userImage', userImage);
    }

    userSignUpMutation(signUpFormData);
  };

  return { handleUserSignUp };
};

export default useSignUpMutation;
