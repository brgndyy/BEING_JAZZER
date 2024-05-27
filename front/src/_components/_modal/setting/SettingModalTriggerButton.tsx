import { settingIcon } from '@/_components/_modal/setting/content/setting.css';
import { myStyle } from '@/_styles/vars.css';
import React from 'react';
import { IoSettingsSharp } from 'react-icons/io5';

type Props = {
  handleModalOpen: () => void;
};

export default function SettingModalTriggerButton({ handleModalOpen }: Props) {
  return <IoSettingsSharp className={`${settingIcon} ${myStyle}`} onClick={handleModalOpen} />;
}
