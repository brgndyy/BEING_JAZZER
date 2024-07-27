import React from 'react';
import { myStyle } from '@/_styles/vars.css';
import { logo } from '../settingModal.css';

export default function SettingModalLogo() {
  return (
    <div className={`${logo} ${myStyle}`}>
      <h2>Setting</h2>
    </div>
  );
}
