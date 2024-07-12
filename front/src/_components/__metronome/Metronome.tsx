import { PropsWithChildren, useMemo } from 'react';
import MetronomeContext from './MetronomeContext';
import useMetronome from './useMetronome';
import Button from './Button';
import BPMInput from './BPMInput';

type Props = {
  maxBpm?: number;
  minBpm?: number;
  autoPlay?: boolean;
  onEndCount?: () => void;
  performOnMount?: boolean;
  maxBeatCount?: number;
};

function Metronome({
  children,
  minBpm = 1,
  maxBpm = 300,
  autoPlay = false,
  onEndCount = () => {},
  performOnMount = false,
  maxBeatCount = 4,
}: PropsWithChildren<Props>) {
  const metronome = useMetronome({
    minBpm,
    maxBpm,
    autoPlay,
    onEndCount,
    performOnMount,
    maxBeatCount,
  });

  const contextValue = useMemo(
    () => ({
      ...metronome,
      minBpm,
      maxBpm,
      autoPlay,
      onEndCount,
    }),
    [metronome, minBpm, maxBpm],
  );

  return <MetronomeContext.Provider value={contextValue}>{children}</MetronomeContext.Provider>;
}

export default Metronome;

Metronome.BPMInput = BPMInput;
Metronome.Button = Button;
