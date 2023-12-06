import React from 'react';
import { myStyle } from '@/_styles/vars.css';
import { BMHAANAPro } from '@/_styles/fonts/fonts';
import { logo } from '../_modal/settingModal.css';

export default function SettingModalLogo() {
  return (
    <div className={`${logo} ${myStyle} ${BMHAANAPro.className}`}>
      <h2>Setting</h2>
    </div>
  );
}
