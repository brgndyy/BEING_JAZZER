import React from 'react';
import { myStyle } from '@/_styles/vars.css';
import { AiOutlineClose } from 'react-icons/ai';
import { closeButtonContainer, closeButton } from '../settingModal.css';

type Props = {
  handleClose: () => void;
};

export default function SettingModalCloseButton({ handleClose }: Props) {
  return (
    <div className={closeButtonContainer}>
      <AiOutlineClose className={`${closeButton} ${myStyle}`} onClick={handleClose} />
    </div>
  );
}
