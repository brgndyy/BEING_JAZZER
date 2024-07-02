import useMetronome from '@/_hooks/useMetronome';
import React, { PropsWithChildren } from 'react';
import MetronomeContext from './MetronomeContext';

function MetronomeProvider(props: PropsWithChildren<object>) {
  const { children } = props;

  const metronomeValues = useMetronome();

  return <MetronomeContext.Provider value={metronomeValues}>{children}</MetronomeContext.Provider>;
}

export default MetronomeProvider;
