import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import Link from 'next/link';
import { myStyle } from '@/_styles/vars.css';
import NaverAuthImage from '../_composables/iconImages/NaverAuthImage';
import GoogleAuthImage from '../_composables/iconImages/GoogleAuthImage';
import {
  authContainer,
  modalBannerImageContainer,
  loginBanner,
  logo,
  closeButton,
  closeButtonContainer,
  loginForm,
  loginFormContainer,
  loginBannerText,
  loginButton,
  formLabel,
  formInput,
  sendMailContainer,
  mailMessage,
  orLogo,
  OAuthContainer,
  googleIcon,
  naverIcon,
  joinContainer,
  toggleAuthMode,
  toggleText,
} from './loginModal.css';
import ModalBannerImage from './ModalBannerImage';

export default function LoginModal() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <>
      <div className={modalBannerImageContainer}>
        <ModalBannerImage />
      </div>
      <div className={authContainer}>
        <div className={loginBanner}>
          <div className={`${logo} ${myStyle}`}>
            <h2>{isSignUp ? '로그인' : '회원가입'}</h2>
          </div>
          <div className={closeButtonContainer}>
            <AiOutlineClose
              // onClick={handleClose}
              className={`${closeButton} ${myStyle}`}
            />
          </div>
        </div>
        <div className={loginFormContainer}>
          <form className={loginForm}>
            <label className={`${formLabel} ${myStyle}`} htmlFor="userEmail">
              이메일
            </label>
            {/* {!mailMsg ? ( */}
            <input
              type="email"
              placeholder="이메일"
              className={formInput}
              id="userEmail"
              //   ref={emailref}
            />
            {/* // ) : ( */}
            {/* <div className={sendMailContainer}>
              <p className={mailMessage}>메일메세지</p>
            </div> */}
            {/* )} */}
            <button type="button" className={`${loginButton} ${myStyle}`}>
              {isSignUp ? '로그인' : '회원가입'}
            </button>
          </form>
        </div>
        <div className={`${orLogo} ${myStyle}`}>
          <p>또는</p>
        </div>
        <div className={OAuthContainer}>
          <Link className={googleIcon} href="http://localhost:3002/api/auth/callback/selectemail">
            <GoogleAuthImage />
          </Link>
          <div className={naverIcon}>
            <NaverAuthImage />
          </div>
          {/* <div className={classes.oauth_icon}>카카오톡 로그인</div> */}
        </div>
        <div className={joinContainer}>
          {isSignUp ? (
            <div className={`${myStyle} ${toggleText}`}>
              <p>아직 Being JAZZER가 아니신가요 ?</p>
            </div>
          ) : (
            <div className={`${myStyle} ${toggleText}`}>
              <p>이미 Being JAZZER 이신가요 ?</p>
            </div>
          )}

          {isSignUp ? (
            <button type="button" className={`${toggleAuthMode} ${myStyle}`}>
              회원가입 하기
            </button>
          ) : (
            <button type="button" className={toggleAuthMode}>
              로그인 하기
            </button>
          )}
        </div>
      </div>
    </>
  );
}