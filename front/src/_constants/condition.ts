import deepFreeze from '@/_utils/deepFreeze';

export const BPM_CONDITION = deepFreeze({
  min_bpm: 1,
  max_bpm: 300,
  default_bpm: 60,
});

export const METRONOME_CONDITION = deepFreeze({
  min_metronome_count: 1,
  max_metronome_count: 4,
});
