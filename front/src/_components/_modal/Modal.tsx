import { PropsWithChildren } from 'react';
import { ModalPropsType } from 'types';
import { myStyle } from '@/_styles/vars.css';
import { modalContainer, moveOut } from './modal.css';

export default function Modal(props: PropsWithChildren<ModalPropsType>) {
  const { children, closing } = props;

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`${modalContainer} ${closing ? moveOut : ''} ${myStyle}`}
      onClick={stopPropagation}
      role="button"
      tabIndex="0"
    >
      {children}
    </div>
  );
}
