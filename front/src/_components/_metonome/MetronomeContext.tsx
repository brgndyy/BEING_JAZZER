'use client';

import { createContext } from 'react';
import { MetronomeContextType } from 'types';

const defaultValues: MetronomeContextType = {
  bpm: 60,
  bpmChangeHandler: () => {},
  bpmBlurHandler: () => {},
  keyDownHandler: () => {},
  focusHandler: () => {},
  blur: false,
  bpmRef: { current: null },
  metronomePlayHandler: () => {},
  count: 1,
};

const MetronomeContext = createContext<MetronomeContextType>(defaultValues);

export default MetronomeContext;
