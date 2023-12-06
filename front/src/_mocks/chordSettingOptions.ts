import { ChordSetting } from 'chordConfigType';

const defaultChordSetting: ChordSetting[] = [
  {
    id: 1,
    type: 'Key',
    config: {
      C: true,
      Db: false,
      D: false,
      E: false,
      Eb: false,
      F: false,
      G: false,
      Gb: false,
      A: false,
      Ab: false,
      B: false,
      Bb: false,
    },
  },
  {
    id: 2,
    type: 'Chord',
    config: {
      Maj: true,
      min: true,
      Dominant: false,
      Slash: false,
      Sus4: false,
    },
  },
  {
    id: 3,
    type: 'Tension',
    config: {
      7: true,
      b5: false,
      9: false,
      11: false,
      13: false,
    },
  },
];

export default defaultChordSetting;
