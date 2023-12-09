import { create } from 'zustand';
import { ChordSetting } from 'types';

type ChordSettingState = {
  chordSetting: ChordSetting[];
  updateChordSetting: (newSetting: ChordSetting[]) => void;
};

const useChordSettingStore = create<ChordSettingState>((set) => ({
  chordSetting: [],
  updateChordSetting: (newSetting) => set({ chordSetting: newSetting }),
}));

export default useChordSettingStore;
