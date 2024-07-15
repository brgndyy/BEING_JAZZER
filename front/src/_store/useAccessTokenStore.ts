import { create } from 'zustand';

type State = {
  accessToken?: string;
  updateAccessToken: (accessToken: string) => void;
};

const useAccessTokenStore = create<State>((set) => ({
  accessToken: '',
  updateAccessToken: (accessToken) => set({ accessToken }),
}));

export default useAccessTokenStore;
