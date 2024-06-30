'use client';

import useCountDown from '@/_hooks/useCountDown';

type Props = {
  handleEndInitialMount: () => void;
};

export default function CountDown({ handleEndInitialMount }: Props) {
  const { count } = useCountDown({ handleEndInitialMount });

  return <div>{count}</div>;
}
