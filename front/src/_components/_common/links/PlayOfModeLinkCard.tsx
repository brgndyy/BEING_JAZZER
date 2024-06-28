import { PropsWithChildren } from 'react';
import { card } from './playOfModeLinkCard.css';

export default function PlayOfModeLinkCard(props: PropsWithChildren<object>) {
  const { children } = props;
  return <div className={card}>{children}</div>;
}
