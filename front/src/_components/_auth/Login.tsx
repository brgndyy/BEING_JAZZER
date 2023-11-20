import { myStyle } from '@/_styles/vars.css';
import { createPortal } from 'react-dom';
import useModal from '@/_hooks/useModal';
import { underLine } from '../_header/header.css';
import { authText } from './login.css';
import LoginModal from '../_modal/LoginModal';
import Modal from '../_modal/Modal';

export default function Login() {
  const { modal, portalElement, modalHandler, closing, handleClose } = useModal();
  return (
    <>
      <div>
        <button
          type="button"
          className={`${authText} ${myStyle} ${underLine}`}
          onClick={modalHandler}
        >
          로그인
        </button>
      </div>
      {modal && portalElement
        ? createPortal(
            <Modal modalHandler={modalHandler} closing={closing} handleClose={handleClose}>
              <LoginModal />
            </Modal>,
            portalElement,
          )
        : null}
    </>
  );
}
