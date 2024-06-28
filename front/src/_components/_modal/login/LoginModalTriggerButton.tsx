import { BMHANNAAir } from '@/_styles/fonts/fonts';
import { myStyle } from '@/_styles/vars.css';
import React from 'react';
import { underLine, authText } from './loginModalContent.css';
import Button from '@/_components/_common/button/Button';

type Props = {
  handleModalOpen: () => void;
};

export default function LoginModalTriggerButton({ handleModalOpen }: Props) {
  return (
    <div>
      <Button
        type="button"
        className={`${authText} ${myStyle} ${underLine} ${BMHANNAAir.className}`}
        onClick={handleModalOpen}
        data-testid="login-trigger-button"
      >
        로그인
      </Button>
    </div>
  );
}
