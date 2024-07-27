import React from 'react';
import { myStyle } from '@/_styles/vars.css';
import { joinContainer, toggleAuthMode, toggleText } from '../loginModalContent.css';

type Props = {
  isLoginMode: boolean;
  handleLoginMode: () => void;
};

export default function LoginModeToggle({ isLoginMode, handleLoginMode }: Props) {
  return (
    <div className={joinContainer}>
      <div className={`${myStyle} ${toggleText}`}>
        <p>{isLoginMode ? `아직 Being JAZZER가 아니신가요 ?` : `이미 Being JAZZER 이신가요 ?`}</p>
      </div>
      <button type="button" className={`${toggleAuthMode} ${myStyle}`} onClick={handleLoginMode}>
        {isLoginMode ? `회원가입 하기` : `로그인 하기`}
      </button>
    </div>
  );
}
