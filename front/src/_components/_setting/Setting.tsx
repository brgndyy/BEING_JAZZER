import { IoSettingsSharp } from 'react-icons/io5';
import { settingIcon } from './setting.css';
import { myStyle } from '@/_styles/vars.css';
import { createPortal } from 'react-dom';
import useModal from '@/_hooks/useModal';
import SettingModal from '../_modal/SettingModal';
import Modal from '../_modal/Modal';

export default function Setting() {
  let { modal, modalHandler, portalElement, closing, handleClose } = useModal();

  return (
    <>
      <IoSettingsSharp className={`${settingIcon} ${myStyle}`} onClick={modalHandler} />

      {modal && portalElement
        ? createPortal(
            <Modal modalHandler={modalHandler} closing={closing} handleClose={handleClose}>
              <SettingModal />
            </Modal>,
            portalElement,
          )
        : null}
    </>
  );
}
