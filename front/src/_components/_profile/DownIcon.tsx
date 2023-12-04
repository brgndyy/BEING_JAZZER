import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { myStyle } from '@/_styles/vars.css';
import { iconContainer, icon } from './userProfile.css';

export default function DownIcon() {
  return (
    <div className={iconContainer}>
      <FaCaretDown className={`${icon} ${myStyle}`} />
    </div>
  );
}
