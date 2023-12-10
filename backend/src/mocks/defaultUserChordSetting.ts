interface ChordSettingConfig {
  [key: string]: {
    isAvailable: boolean;
    isSelected: boolean;
  };
}

interface ChordSetting {
  id: number;
  type: 'Key' | 'Chord' | 'Tension';
  config: ChordSettingConfig;
}

const defaultUserChordSetting: ChordSetting[] = [
  {
    id: 1,
    type: 'Key',
    config: {
      C: { isAvailable: true, isSelected: true },
      Db: { isAvailable: true, isSelected: false },
      D: { isAvailable: true, isSelected: false },
      E: { isAvailable: true, isSelected: false },
      Eb: { isAvailable: true, isSelected: false },
      F: { isAvailable: true, isSelected: false },
      G: { isAvailable: true, isSelected: false },
      Gb: { isAvailable: true, isSelected: false },
      A: { isAvailable: true, isSelected: false },
      Ab: { isAvailable: true, isSelected: false },
      B: { isAvailable: true, isSelected: false },
      Bb: { isAvailable: true, isSelected: false },
    },
  },
  {
    id: 2,
    type: 'Chord',
    config: {
      Maj: { isAvailable: true, isSelected: true },
      min: { isAvailable: true, isSelected: true },
      Dominant: { isAvailable: true, isSelected: false },
      dim: { isAvailable: true, isSelected: false },
      Slash: { isAvailable: true, isSelected: false },
      Sus4: { isAvailable: true, isSelected: false },
    },
  },
  {
    id: 3,
    type: 'Tension',
    config: {
      7: { isAvailable: true, isSelected: true },
      b5: { isAvailable: true, isSelected: false },
      9: { isAvailable: true, isSelected: false },
      11: { isAvailable: true, isSelected: false },
      13: { isAvailable: true, isSelected: false },
    },
  },
];

export default defaultUserChordSetting;
