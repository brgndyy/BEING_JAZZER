import { create } from 'zustand';
import { ChordSetting } from 'types';

type SelectedSettingOptionType = { [key: string]: boolean };

type ChordSettingState = {
  chordSetting: ChordSetting[];
  selectedSettingOption: SelectedSettingOptionType;
  updateChordSetting: (newSetting: ChordSetting[]) => void;
  updateSelectedSettingOption: (newOption: SelectedSettingOptionType) => void;
};

const useChordSettingStore = create<ChordSettingState>((set) => ({
  chordSetting: [],
  selectedSettingOption: {},
  updateChordSetting: (newSetting) => set({ chordSetting: newSetting }),
  updateSelectedSettingOption: (newOption) => set({ selectedSettingOption: newOption }),
}));

export default useChordSettingStore;
