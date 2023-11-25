import { useRef, useState } from 'react';
import { ResponseType } from 'types';
import PATH_ROUTES from '@/_constants/pathRoutes';
import ERROR_MESSAGES from '@/_constants/errorMessages';
import { toast } from 'react-toastify';
import useFetch from './useFetch';
import 'react-toastify/dist/ReactToastify.css';

const useEmailForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string | undefined>();
  const { isLoading, sendRequest } = useFetch();
  const [isLoginMode, setIsLoginMode] = useState(true);

  const loginModeHandler = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  const formSubmitHandler = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailRef.current) {
      try {
        const res = await sendRequest<ResponseType>(
          process.env.NEXT_PUBLIC_BE_URL + PATH_ROUTES.request_auth_email,
          JSON.stringify({
            userEmail: emailRef.current.value,
          }),
          {
            'Content-Type': 'application/json',
          },
          'POST',
        );

        setMessage(res.message);
        emailRef.current.value = '';
      } catch (err) {
        toast.error(ERROR_MESSAGES.fail_send_email);
      }
    }
  };

  return { emailRef, message, isLoading, isLoginMode, loginModeHandler, formSubmitHandler };
};

export default useEmailForm;
