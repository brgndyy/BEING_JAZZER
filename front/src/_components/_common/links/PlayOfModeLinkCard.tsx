import { PropsWithChildren } from 'react';
import { card } from './playOfModeLinkCard.css';

export default function PlayOfModeLinkCard({ children }: PropsWithChildren) {
  return <div className={card}>{children}</div>;
}
