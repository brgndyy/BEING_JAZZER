import { PropsWithChildren } from 'react';
import { backDrop } from './backdrop.css';

export default function Backdrop(props: PropsWithChildren<object>) {
  const { children } = props;

  return <div className={backDrop}>{children}</div>;
}
