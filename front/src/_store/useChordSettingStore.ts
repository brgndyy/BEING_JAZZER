import { create } from 'zustand';

export interface ChordSetting {
  readonly id: number;
  readonly type: string;
  readonly config: {
    readonly [key: string]: {
      isAvailable: boolean;
      isSelected: boolean;
    };
  };
}

type ChordSettingState = {
  chordSetting: ChordSetting[];
  updateChordSetting: (newSetting: ChordSetting[]) => void;
};

const useChordSettingStore = create<ChordSettingState>((set) => ({
  chordSetting: [],
  updateChordSetting: (newSetting) => set({ chordSetting: newSetting }),
}));

export default useChordSettingStore;
