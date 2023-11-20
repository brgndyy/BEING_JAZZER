import { PropsWithChildren } from 'react';
import { ModalPropsType } from 'types';
import { myStyle } from '@/_styles/vars.css';
import { modalContainer, moveOut } from './modal.css';
import Backdrop from './Backdrop';

export default function Modal(props: PropsWithChildren<ModalPropsType>) {
  const { children, closing, handleClose } = props;

  return (
    <Backdrop handleClose={handleClose}>
      <div className={`${modalContainer} ${closing ? moveOut : ''} ${myStyle}`}>{children}</div>
    </Backdrop>
  );
}
