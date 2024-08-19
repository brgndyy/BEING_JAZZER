import React from 'react';
import { myStyle } from '@/_styles/vars.css';
import { AiOutlineClose } from 'react-icons/ai';
import { closeButtonContainer, closeButton } from '../settingModal.css';

type SettingModalCloseButtonProps = {
  handleClose: () => void;
};

export default function SettingModalCloseButton({ handleClose }: SettingModalCloseButtonProps) {
  return (
    <div className={closeButtonContainer}>
      <AiOutlineClose className={`${closeButton} ${myStyle}`} onClick={handleClose} />
    </div>
  );
}
