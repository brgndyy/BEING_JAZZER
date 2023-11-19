import Backdrop from './Backdrop';
import { modalContainer, moveOut } from './modal.css';
import { PropsWithChildren } from 'react';
import { ModalProps } from 'types';

export default function Modal(props: PropsWithChildren<ModalProps>) {
  const { children, modalHandler, closing, handleClose } = props;

  return (
    <>
      <Backdrop>
        <div className={`${modalContainer} ${closing ? moveOut : ''}`} onClick={handleClose}>
          {children}
        </div>
      </Backdrop>
    </>
  );
}
