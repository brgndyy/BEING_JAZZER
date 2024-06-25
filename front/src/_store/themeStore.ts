import { create } from 'zustand';

type State = {
  theme: boolean;
  updateTheme: (theme: boolean) => void;
};

const themeStore = create<State>((set) => ({
  theme: false,
  updateTheme: (theme) => set({ theme }),
}));

export default themeStore;
