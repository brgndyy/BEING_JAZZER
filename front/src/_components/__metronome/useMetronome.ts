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

type UseMetronomeHookParams = {
  minBpm: number;
  maxBpm: number;
  autoPlay: boolean;
  onEndCount: () => void;
  performOnMount: boolean;
};

const useMetronome = ({
  minBpm,
  maxBpm,
  autoPlay,
  onEndCount,
  performOnMount,
}: UseMetronomeHookParams) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const bpmRef = useRef<HTMLInputElement | null>(null);
  const [tick] = useState<HTMLAudioElement>(new Audio(tickSound));
  const [tock] = useState<HTMLAudioElement>(new Audio(tockSound));
  const [bpm, setBpm] = useState<number>(60);
  const [count, setCount] = useState<number>(METRONOME_COUNT.MIN);
  const [isInitialActionPerformed, setIsInitialActionPerformed] = useState(performOnMount);

  useEffect(() => {
    if (autoPlay) {
      setIsPlaying(true);
    }
  }, [autoPlay]);

  //   const metronomePlayHandler = useCallback(() => {
  //     if (!first && tick) {
  //       setFirst(true);
  //       tick.play();
  //     } else if (count == 1 && tick) {
  //       tick.play();
  //       const totalSlides = darkTheme ? images.dark.length : images.white.length;
  //       const nextSlide = (count - 1) % totalSlides;
  //       carouselRef.current && carouselRef.current.next(nextSlide);
  //     } else if (count < 5 && tock) {
  //       tock.play();
  //     }
  //     if (count >= 4) {
  //       setCount(1);
  //     } else {
  //       setCount((count) => count + 1);
  //     }
  //   }, [count, tick, tock, darkTheme, images]);

  const handlePlayMetronomeSound = useCallback(async () => {
    if (count === METRONOME_COUNT.MIN && tick) {
      tick.currentTime = 0;
      await tick.play();
      if (isInitialActionPerformed) {
        onEndCount();
      }
    } else if (count > METRONOME_COUNT.MIN && tock) {
      tock.currentTime = 0;
      await tock.play();
    }

    setCount((prevCount) => {
      if (prevCount >= METRONOME_COUNT.MAX) {
        setIsInitialActionPerformed(true);
        return METRONOME_COUNT.MIN;
      } else {
        return prevCount + 1;
      }
    });
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
