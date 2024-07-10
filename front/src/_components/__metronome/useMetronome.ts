import { useCallback, useEffect, useRef, useState } from 'react';
import tickSound from '../../../public/assets/sounds/tick.wav';
import tockSound from '../../../public/assets/sounds/tock.wav';

const METRONOME_COUNT = {
  MIN: 1,
  MAX: 4,
} as const;

// const CONDITION = {
//   min_metronome_count: 1,
//   max_metronome_count: 4,
// } as const;

type UseMetronomeHookProps = {
  minBpm: number;
  maxBpm: number;
  autoPlay: boolean;
  onEndCount: () => void;
};

const useMetronome = ({ minBpm, maxBpm, autoPlay, onEndCount }: UseMetronomeHookProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const bpmRef = useRef<HTMLInputElement | null>(null);
  const [tick] = useState<HTMLAudioElement>(new Audio(tickSound));
  const [tock] = useState<HTMLAudioElement>(new Audio(tockSound));
  const [bpm, setBpm] = useState<number>(60);
  const [count, setCount] = useState<number>(METRONOME_COUNT.MIN);

  useEffect(() => {
    if (autoPlay) {
      setIsPlaying(true);
    }
  }, [autoPlay]);

  const handlePlayMetronomeSound = useCallback(async () => {
    if (count === METRONOME_COUNT.MIN && tick) {
      tick.currentTime = 0;
      await tick.play();
    } else if (count > METRONOME_COUNT.MIN && tock) {
      tock.currentTime = 0;
      await tock.play();
    }

    setCount(
      (prevCount) => {
        if (prevCount >= METRONOME_COUNT.MAX) {
          onEndCount();
          console.log('변경!');
          return METRONOME_COUNT.MIN;
        } else {
          return prevCount + 1;
        }
      },
      //   prevCount >= METRONOME_COUNT.MAX ? METRONOME_COUNT.MIN : prevCount + 1,
    );
  }, [count, tick, tock]);

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (isPlaying) {
          handlePlayMetronomeSound();
        }
      },
      (60 / bpm) * 1000,
    );

    return () => {
      clearInterval(interval);
    };
  }, [bpm, isPlaying, handlePlayMetronomeSound]);

  //   useEffect(() => {
  //     if (autoPlay) {
  //       handlePlayMetronomeSound();
  //     }
  //   }, [autoPlay, handlePlayMetronomeSound]);

  const handleBPMChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newBpm = parseInt(e.target.value, 10);
    if (newBpm < minBpm) {
      newBpm = minBpm;
    }
    if (newBpm > maxBpm) {
      newBpm = maxBpm;
    }
    setBpm(newBpm);
  };

  const handleBPMInputBlur = () => {
    if (bpmRef.current && (Number.isNaN(bpm) || bpm > maxBpm)) {
      setBpm(maxBpm);
    }
  };

  const handleBPMKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newBpm = parseInt(e.currentTarget.value, 10);
      if (Number.isNaN(newBpm)) {
        setBpm(minBpm);
      }
      e.currentTarget.blur();
    }
  };

  const handleBPMInputFocus = () => {
    if (bpmRef.current && bpmRef.current !== document.activeElement) {
      bpmRef.current.blur();
    }
  };

  useEffect(() => {
    if (bpmRef.current && bpmRef.current !== document.activeElement) {
      bpmRef.current.blur();
    }
  }, [bpmRef]);

  const handleTogglePlaying = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return {
    isPlaying,
    bpm,
    bpmRef,
    handleBPMInputBlur,
    handleBPMKeydown,
    handleBPMInputFocus,
    handleBPMChange,
    handleTogglePlaying,
  };
};

export default useMetronome;
