'use client';

import { createContext, RefObject, ChangeEventHandler } from 'react';

type MetronomeContextProps = {
  bpm: number;
  bpmChangeHandler: ChangeEventHandler<HTMLInputElement>;
  bpmBlurHandler: () => void;
  keyDownHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  focusHandler: () => void;
  blur: boolean;
  bpmRef: RefObject<HTMLInputElement>;
  metronomePlayHandler: () => void;
  count: number;
  first: boolean;
  playingModeHandler: () => void;
  isPlaying: boolean;
};

const defaultValues: MetronomeContextProps = {
  bpm: 60,
  bpmChangeHandler: () => {},
  bpmBlurHandler: () => {},
  keyDownHandler: () => {},
  focusHandler: () => {},
  blur: false,
  bpmRef: { current: null },
  metronomePlayHandler: () => {},
  count: 1,
  first: false,
  playingModeHandler: () => {},
  isPlaying: false,
};

const MetronomeContext = createContext<MetronomeContextProps>(defaultValues);

export default MetronomeContext;
