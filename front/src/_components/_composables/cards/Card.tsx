import { PropsWithChildren } from 'react';
import { mainCardContainer } from './card.css';

export default function Card(props: PropsWithChildren<object>) {
  const { children } = props;
  return <div className={mainCardContainer}>{children}</div>;
}
