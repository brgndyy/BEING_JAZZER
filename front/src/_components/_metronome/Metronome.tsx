'use client';

import { BPM_CONDITION } from '@/_constants/condition';
import { useContext } from 'react';
import MetronomeContext from './MetronomeContext';

export default function Metronome() {
  const {
    bpm,
    bpmChangeHandler,
    bpmBlurHandler,
    keyDownHandler,
    focusHandler,
    bpmRef,
    playingModeHandler,
    isPlaying,
  } = useContext(MetronomeContext);

  return (
    <div>
      <label htmlFor="metronome">
        BPM :
        <input
          //   className={classes2.bpm_input}
          type="number"
          min={BPM_CONDITION.min_bpm}
          max={BPM_CONDITION.max_bpm}
          step={1}
          ref={bpmRef}
          value={bpm}
          onBlur={bpmBlurHandler}
          onFocus={focusHandler}
          onChange={bpmChangeHandler}
          onKeyDown={keyDownHandler}
        />
      </label>
      <button type="button" onClick={playingModeHandler}>
        {isPlaying ? '일시 정지' : '시작'}
      </button>
    </div>
  );
}
