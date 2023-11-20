import { PropsWithChildren } from 'react';
import { BackDropPropsType } from 'types';
import usePreventScroll from '@/_hooks/usePreventScroll';
import { backDrop } from './backdrop.css';

export default function Backdrop(props: PropsWithChildren<BackDropPropsType>) {
  const { children, handleClose } = props;
  usePreventScroll();

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={backDrop} onClick={handleClose}>
      {children}
    </div>
  );
}
