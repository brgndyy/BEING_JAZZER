import { PropsWithChildren } from 'react';
import { funnelCardContainer } from './funnelCard.css';

export default function FunnelCard(props: PropsWithChildren<object>) {
  const { children } = props;

  return <div className={`${funnelCardContainer}`}>{children}</div>;
}
