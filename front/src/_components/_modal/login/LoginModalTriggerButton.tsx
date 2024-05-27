import { BMHANNAAir } from '@/_styles/fonts/fonts';
import { myStyle } from '@/_styles/vars.css';
import React from 'react';
import { underLine, authText } from './loginModalContent.css';

type Props = {
  handleModalOpen: () => void;
};

export default function LoginModalTriggerButton({ handleModalOpen }: Props) {
  return (
    <div>
      <button
        type="button"
        className={`${authText} ${myStyle} ${underLine} ${BMHANNAAir.className}`}
        onClick={handleModalOpen}
      >
        로그인
      </button>
    </div>
  );
}
