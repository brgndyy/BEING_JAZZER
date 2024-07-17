'use client';

import { myStyle } from '@/_styles/vars.css';
import useForm from '@/_hooks/useForm';
import React, { useState } from 'react';
import { BMHANNAAir } from '@/_styles/fonts/fonts';
import { authContainer, modalBannerImageContainer, orLogo } from '../loginModalContent.css';
import ModalBannerImage from '../../../_common/images/bannerImages/ModalBannerImage';
import LoadingSpinner from '../../../_common/loadingSpinner/LoadingSpinner';
import LoginModeToggle from './LoginModeToggle';
import OAuthIcons from './OAuthIcons';
import LoginForm from './LoginForm';
import LoginBanner from './LoginBanner';
import { modalContainer } from '../../modal.css';
import { LoginParams } from '@/_types';
import useAuthEmailMutation from '@/_hooks/mutations/useAuthEmailMutation';

type Props = {
  handleClose: () => void;
};

export default function LoginModalContent({ handleClose }: Props) {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { formState, handleFormValue } = useForm<LoginParams>({
    userEmail: '',
  });

  const handleLoginMode = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  const { message, handleSendAuthEmail, isPending } = useAuthEmailMutation({
    userEmail: formState.userEmail,
  });

  return (
    <>
      {isPending && <LoadingSpinner />}
      <LoadingSpinner />
      <div className={`${modalContainer} ${myStyle}`}>
        <div className={modalBannerImageContainer}>
          <ModalBannerImage />
        </div>
        <div className={authContainer}>
          <LoginBanner isLoginMode={isLoginMode} handleClose={handleClose} />
          <LoginForm
            handleSendAuthEmail={handleSendAuthEmail}
            handleFormValue={handleFormValue}
            message={message}
            value={formState.userEmail}
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
