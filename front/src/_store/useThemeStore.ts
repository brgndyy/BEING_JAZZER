import { create } from 'zustand';

type State = {
  theme: boolean;
  updateTheme: (theme: boolean) => void;
};

const useThemeStore = create<State>((set) => ({
  theme: false,
  updateTheme: (theme) => set({ theme }),
}));

export default useThemeStore;
