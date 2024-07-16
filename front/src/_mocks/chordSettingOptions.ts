import { ChordSetting } from '@/_types';

const defaultChordSetting: ChordSetting[] = [
  {
    id: 1,
    type: 'Key',
    config: {
      C: { isAvailable: true, isSelected: true },
      Db: { isAvailable: false, isSelected: false },
      D: { isAvailable: false, isSelected: false },
      E: { isAvailable: false, isSelected: false },
      Eb: { isAvailable: false, isSelected: false },
      F: { isAvailable: false, isSelected: false },
      G: { isAvailable: false, isSelected: false },
      Gb: { isAvailable: false, isSelected: false },
      A: { isAvailable: false, isSelected: false },
      Ab: { isAvailable: false, isSelected: false },
      B: { isAvailable: false, isSelected: false },
      Bb: { isAvailable: false, isSelected: false },
    },
  },
  {
    id: 2,
    type: 'Chord',
    config: {
      Maj: { isAvailable: true, isSelected: true },
      min: { isAvailable: true, isSelected: true },
      Dominant: { isAvailable: false, isSelected: false },
      dim: { isAvailable: false, isSelected: false },
      Slash: { isAvailable: false, isSelected: false },
      Sus4: { isAvailable: false, isSelected: false },
    },
  },
  {
    id: 3,
    type: 'Tension',
    config: {
      7: { isAvailable: true, isSelected: true },
      b5: { isAvailable: false, isSelected: false },
      9: { isAvailable: false, isSelected: false },
      11: { isAvailable: false, isSelected: false },
      13: { isAvailable: false, isSelected: false },
    },
  },
];

export default defaultChordSetting;
