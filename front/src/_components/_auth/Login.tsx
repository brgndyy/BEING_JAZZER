import { myStyle } from '@/_styles/vars.css';
import { createPortal } from 'react-dom';
import useModal from '@/_hooks/useModal';
import { BMHANNAAir } from '@/_styles/fonts/fonts';
import { underLine } from '../_header/header.css';
import { authText } from './login.css';
import LoginModal from '../_modal/LoginModal';
import Modal from '../_modal/Modal';
import Backdrop from '../_modal/Backdrop';

export default function Login() {
  const { modal, portalElement, modalHandler, closing, handleClose } = useModal();
  return (
    <>
      <div>
        <button
          type="button"
          className={`${authText} ${myStyle} ${underLine} ${BMHANNAAir.className}`}
          onClick={modalHandler}
        >
          로그인
        </button>
      </div>
      {modal && portalElement
        ? createPortal(
            <Backdrop handleClose={handleClose}>
              <Modal closing={closing}>
                <LoginModal handleClose={handleClose} />
              </Modal>
            </Backdrop>,
            portalElement,
          )
        : null}
    </>
  );
}
