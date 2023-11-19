import { IoSettingsSharp } from 'react-icons/io5';
import { settingIcon } from './setting.css';
import { myStyle } from '@/_styles/vars.css';

export default function Setting() {
  return (
    <>
      <IoSettingsSharp className={`${settingIcon} ${myStyle}`} />
    </>
  );
}
