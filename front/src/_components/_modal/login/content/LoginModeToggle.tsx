import React from 'react';
import { myStyle } from '@/_styles/vars.css';
import { joinContainer, toggleText } from '../loginModalContent.css';
import Button from '@/_components/_common/button/Button';

type LoginModeToggleProps = {
  isLoginMode: boolean;
  handleToggleAuthMode: () => void;
};

export default function LoginModeToggle({
  isLoginMode,
  handleToggleAuthMode,
}: LoginModeToggleProps) {
  return (
    <div className={joinContainer}>
      <div className={`${myStyle} ${toggleText}`}>
        <p>{isLoginMode ? `아직 Being JAZZER가 아니신가요 ?` : `이미 Being JAZZER 이신가요 ?`}</p>
      </div>
      <Button variant="border" type="button" onClick={handleToggleAuthMode}>
        {isLoginMode ? `회원가입 하기` : `로그인 하기`}
      </Button>
    </div>
  );
}
