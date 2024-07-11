import { PropsWithChildren, useMemo } from 'react';
import MetronomeContext from './MetronomeContext';
import useMetronome from './useMetronome';
import PlayButton from './PlayButton';
import BPMInput from './BPMInput';

type Props = {
  maxBpm?: number;
  minBpm?: number;
  autoPlay?: boolean;
  onEndCount?: () => void;
  performOnMount?: boolean;
};

function Metronome({
  children,
  minBpm = 1,
  maxBpm = 300,
  autoPlay = false,
  onEndCount = () => {},
  performOnMount = false,
}: PropsWithChildren<Props>) {
  const metronome = useMetronome({ minBpm, maxBpm, autoPlay, onEndCount, performOnMount });

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
Metronome.PlayButton = PlayButton;
