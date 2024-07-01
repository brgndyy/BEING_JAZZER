'use client';

import useCountDown from '@/_hooks/useCountDown';
import { container, text, animate } from './countDown.css';
import { myStyle } from '@/_styles/vars.css';

type Props = {
  handleEndInitialMount: () => void;
};

export default function CountDown({ handleEndInitialMount }: Props) {
  const { count } = useCountDown({ handleEndInitialMount });

  return (
    <div className={container}>
      <h1 key={count} className={`${text} ${myStyle} ${animate}`}>
        {count}
      </h1>
    </div>
  );
}
