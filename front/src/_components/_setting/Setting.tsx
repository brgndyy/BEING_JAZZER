import { IoSettingsSharp } from 'react-icons/io5';
import { myStyle } from '@/_styles/vars.css';
import { createPortal } from 'react-dom';
import useModal from '@/_hooks/useModal';
import { settingIcon } from './setting.css';
import SettingModal from '../_modal/SettingModal';
import Modal from '../_modal/Modal';
import Backdrop from '../_modal/Backdrop';

export default function Setting() {
  const { modal, modalHandler, portalElement, closing, handleClose } = useModal();

  return (
    <>
      <IoSettingsSharp className={`${settingIcon} ${myStyle}`} onClick={modalHandler} />

      {modal && portalElement
        ? createPortal(
            <Backdrop handleClose={handleClose}>
              <Modal closing={closing}>
                <SettingModal handleClose={handleClose} />
              </Modal>
            </Backdrop>,
            portalElement,
          )
        : null}
    </>
  );
}
