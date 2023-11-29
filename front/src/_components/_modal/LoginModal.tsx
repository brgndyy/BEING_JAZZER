'use client';

import { myStyle } from '@/_styles/vars.css';
import { LoginModalPropsType } from 'types';
import useEmailForm from '@/_hooks/useEmailForm';
import { authContainer, modalBannerImageContainer, orLogo } from './loginModal.css';
import ModalBannerImage from '../_composables/images/bannerImages/ModalBannerImage';
import LoadingSpinner from '../_composables/loadingSpinner/LoadingSpinner';
import LoginModeToggle from '../_login/LoginModeToggle';
import OAuthIcons from '../_login/OAuthIcons';
import LoginForm from '../_login/LoginForm';
import LoginBanner from '../_login/LoginBanner';

export default function LoginModal({ handleClose }: LoginModalPropsType) {
  const { emailRef, message, isLoading, isLoginMode, loginModeHandler, formSubmitHandler } =
    useEmailForm();

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div className={modalBannerImageContainer}>
        <ModalBannerImage />
      </div>
      <div className={authContainer}>
        <LoginBanner isLoginMode={isLoginMode} handleClose={handleClose} />
        <LoginForm
          formSubmitHandler={formSubmitHandler}
          message={message}
          emailRef={emailRef}
          isLoginMode={isLoginMode}
        />
        <div className={`${orLogo} ${myStyle}`}>
          <p>또는</p>
        </div>
        <OAuthIcons />
        <LoginModeToggle isLoginMode={isLoginMode} loginModeHandler={loginModeHandler} />
      </div>
    </>
  );
}
