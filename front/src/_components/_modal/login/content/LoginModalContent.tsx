'use client';

import { myStyle } from '@/_styles/vars.css';
import { LoginModalPropsType } from 'types';
import useForm from '@/_hooks/useForm';
import React, { useState } from 'react';
import useFetch from '@/_hooks/useFetch';
import ERROR_MESSAGES from '@/_constants/errorMessages';
import { toast } from 'react-toastify';
import PATH_ROUTES from '@/_constants/pathRoutes';
import { BMHANNAAir } from '@/_styles/fonts/fonts';
import { authContainer, modalBannerImageContainer, orLogo } from '../loginModalContent.css';
import ModalBannerImage from '../../../_common/images/bannerImages/ModalBannerImage';
import LoadingSpinner from '../../../_common/loadingSpinner/LoadingSpinner';
import LoginModeToggle from './LoginModeToggle';
import OAuthIcons from './OAuthIcons';
import LoginForm from './LoginForm';
import LoginBanner from './LoginBanner';
import { modalContainer } from '../../modal.css';

export default function LoginModalContent({ handleClose }: LoginModalPropsType) {
  const [message, setMessage] = useState<string | undefined>();
  const { isLoading, sendRequest } = useFetch();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { formState, inputHandler } = useForm({
    userEmail: '',
  });

  const handleLoginMode = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  const formSubmitHandler = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await sendRequest(
        process.env.NEXT_PUBLIC_DEFAULT_BE_URL + PATH_ROUTES.request_auth_email,
        JSON.stringify({
          userEmail: formState.userEmail,
        }),
        {
          'Content-Type': 'application/json',
        },
        'POST',
      );

      const data = await res.json();

      setMessage(data.message);
      formState.userEmail = '';
    } catch (err) {
      toast.error(ERROR_MESSAGES.fail_send_email);
    }
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div className={`${modalContainer} ${myStyle}`}>
        <div className={modalBannerImageContainer}>
          <ModalBannerImage />
        </div>
        <div className={authContainer}>
          <LoginBanner isLoginMode={isLoginMode} handleClose={handleClose} />
          <LoginForm
            formSubmitHandler={formSubmitHandler}
            inputHandler={inputHandler}
            message={message}
            value={typeof formState.userEmail === 'string' ? formState.userEmail : ''}
            isLoginMode={isLoginMode}
          />
          <div className={`${orLogo} ${myStyle} ${BMHANNAAir.className}`}>
            <p>또는</p>
          </div>
          <OAuthIcons />
          <LoginModeToggle isLoginMode={isLoginMode} handleLoginMode={handleLoginMode} />
        </div>
      </div>
    </>
  );
}
