import React from 'react';
import { myStyle } from '@/_styles/vars.css';
import { LoginModeTogglePropsType } from 'types';
import { joinContainer, toggleAuthMode, toggleText } from '../_modal/loginModal.css';

export default function LoginModeToggle({
  isLoginMode,
  loginModeHandler,
}: LoginModeTogglePropsType) {
  return (
    <div className={joinContainer}>
      <div className={`${myStyle} ${toggleText}`}>
        <p>{isLoginMode ? `아직 Being JAZZER가 아니신가요 ?` : `이미 Being JAZZER 이신가요 ?`}</p>
      </div>
      <button type="button" className={`${toggleAuthMode} ${myStyle}`} onClick={loginModeHandler}>
        {isLoginMode ? `회원가입 하기` : `로그인 하기`}
      </button>
    </div>
  );
}
