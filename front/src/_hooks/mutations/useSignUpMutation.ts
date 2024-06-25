import { useMutation } from '@tanstack/react-query';
import { userSignUp } from '@/_apis/authAPI';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { SignUpFormState } from '@/_types';
import ERROR_MESSAGES from '@/_constants/errorMessages';
import { PAGE_ROUTES } from '@/_constants/routes';

const useSignUpMutation = ({ userName, userEmail, userImage }: SignUpFormState) => {
  const router = useRouter();

  const { mutate: userSignUpMutation } = useMutation<void, Error, { signUpFormData: FormData }>({
    mutationFn: ({ signUpFormData }) => userSignUp(signUpFormData),
    onSuccess: () => {
      router.refresh();
      router.replace(PAGE_ROUTES.MAIN);
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

    userSignUpMutation({ signUpFormData });
  };

  return { handleUserSignUp };
};

export default useSignUpMutation;
