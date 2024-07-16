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

export type ChangeUserChordSetting = {
  chordSetting: ChordSetting[];
  accessToken: string;
};

export interface LoginParams {
  userEmail: string;
}

export interface SignUpParams {
  userName: string;
  userImage: File | null;
  userEmail: string;
}

export interface UserInfo {
  id: number;
  userEmail: string;
  userName: string;
  userProfileImageSrc: string;
  emailId: number;
  nowLoggedIn: boolean;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface HeaderProps {
  currentTheme: string;
  userInfo?: UserInfo;
  chordSetting: ChordSetting[];
  accessToken?: string;
}

export interface UserProfile {
  userInfo: UserInfo;
}

export interface ThemeToggleInputProps {
  darkTheme: boolean;
  themeToggleHandler: () => void;
}

export type ChordSettingKey = 'Key' | 'Chord' | 'Tension';

export interface SearchParams {
  searchParams: {
    code: string;
  };
}

export interface ChordImageData {
  id: number;
  keyId: number;
  chordId: number;
  version: number;
  imageUrl: string;
  theme: 'Dark' | 'White';
}
export interface TotalChordImageData {
  whiteChordImages: ChordImageData[];
  darkChordImages: ChordImageData[];
}
