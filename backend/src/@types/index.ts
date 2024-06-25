interface ChordSettingConfig {
  [key: string]: {
    isAvailable: boolean;
    isSelected: boolean;
  };
}

export interface ChordSetting {
  id: number;
  type: 'Key' | 'Chord' | 'Tension';
  config: ChordSettingConfig;
}
