import React from 'react';
import { myStyle } from '@/_styles/vars.css';
import { AiOutlineClose } from 'react-icons/ai';
import { SettingModalPropsType } from 'types';
import { closeButtonContainer, closeButton } from '../_modal/settingModal.css';

export default function SettingModalCloseButton({ handleClose }: SettingModalPropsType) {
  return (
    <div className={closeButtonContainer}>
      <AiOutlineClose className={`${closeButton} ${myStyle}`} onClick={handleClose} />
    </div>
  );
}
