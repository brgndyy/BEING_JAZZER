'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { BPM_CONDITION, METRONOME_CONDITION } from '@/_constants/condition';
import tickSound from 'public/assets/sounds/tick.wav';
import tockSound from 'public/assets/sounds/tock.wav';

const useMetronome = () => {
  const bpmRef = useRef<HTMLInputElement | null>(null);
  const [bpm, setBpm] = useState(60);
  const [blur, setBlur] = useState(false);
  const [tick, setTick] = useState<HTMLAudioElement>();
  const [tock, setTock] = useState<HTMLAudioElement>();
  const [count, setCount] = useState(1);
  const [first, setFirst] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const playingModeHandler = () => {
    setIsPlaying((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (!isPlaying) {
      setFirst(false);
    }
  }, [isPlaying]);

  useEffect(() => {
    setTick(new Audio(tickSound));
    setTock(new Audio(tockSound));
  }, []);

  const metronomePlayHandler = useCallback(() => {
    setCount((prevCount) => {
      const nextCount =
        prevCount >= METRONOME_CONDITION.max_metronome_count
          ? METRONOME_CONDITION.min_metronome_count
          : prevCount + 1;

      if (!first && prevCount === 1 && tick) {
        tick.play();
        setFirst(true);
      }
      if (nextCount === METRONOME_CONDITION.min_metronome_count && tick) {
        tick.play();
      } else if (nextCount > METRONOME_CONDITION.min_metronome_count && tock) {
        tock.play();
      }

      return nextCount;
    });
  }, [tick, tock, first]);

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (isPlaying) {
          metronomePlayHandler();
        }
      },
      (60 / bpm) * 1000,
    );

    return () => {
      clearInterval(interval);
    };
  }, [bpm, metronomePlayHandler, isPlaying]);

  const bpmChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newBpm = parseInt(e.target.value, 10);
    if (newBpm < BPM_CONDITION.min_bpm) {
      newBpm = BPM_CONDITION.min_bpm;
    }
    if (newBpm > BPM_CONDITION.max_bpm) {
      newBpm = BPM_CONDITION.max_bpm;
      if (bpmRef.current) {
        bpmRef.current.blur();
      }
    }
    setBpm(newBpm);
    if (bpmRef.current && Number.isNaN(newBpm)) {
      bpmRef.current.focus();
    }
    if (bpmRef.current && newBpm > BPM_CONDITION.max_bpm) {
      bpmRef.current.blur();
    }
  };

  const bpmBlurHandler = () => {
    if (bpmRef.current && bpm > BPM_CONDITION.max_bpm) {
      setBpm(200);
      bpmRef.current.blur();
    }
    if (bpmRef.current && Number.isNaN(bpm)) {
      setBpm(1);
      bpmRef.current.blur();
    }
    setBlur(true);
  };

  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (bpmRef.current && e.key === 'Enter') {
      const newBpm = parseInt(e.currentTarget.value, 10);

      if (Number.isNaN(newBpm)) {
        setBpm(BPM_CONDITION.min_bpm);
      }
      e.currentTarget.blur();
    }
  };

  const focusHandler = () => {
    setBlur(false);
  };

  useEffect(() => {
    if (bpmRef.current && bpmRef.current !== document.activeElement) {
      bpmRef.current.blur();
    }
  }, [bpmRef]);

  return {
    bpm,
    bpmChangeHandler,
    bpmBlurHandler,
    keyDownHandler,
    focusHandler,
    blur,
    bpmRef,
    metronomePlayHandler,
    count,
    first,
    playingModeHandler,
    isPlaying,
  };
};

export default useMetronome;
