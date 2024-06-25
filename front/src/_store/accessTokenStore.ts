import { create } from 'zustand';

type State = {
  accessToken?: string;
  updateAccessToken: (accessToken: string) => void;
};

const accessTokenStore = create<State>((set) => ({
  accessToken: '',
  updateAccessToken: (accessToken) => set({ accessToken }),
}));

export default accessTokenStore;
