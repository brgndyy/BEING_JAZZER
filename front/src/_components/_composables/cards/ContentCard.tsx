import { PropsWithChildren } from 'react';
import { contentCard } from './contentCard.css';

export default function ContentCard(props: PropsWithChildren<object>) {
  const { children } = props;
  return <div className={contentCard}>{children}</div>;
}
