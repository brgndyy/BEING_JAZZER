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

export interface LoginFormState {
  userEmail: string;
}

export interface SignUpFormState extends LoginFormState {
  userName: string;
  userImage: File | null;
}

export interface UserInfoType {
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
  userInfo: UserInfoType;
  chordSetting: ChordSetting[];
  accessToken?: string;
}

export interface UserProfileProps {
  userInfo: UserInfoType;
}

export interface ThemeToggleInputProps {
  darkTheme: boolean;
  themeToggleHandler: () => void;
}

export interface BackDropPropsType {
  handleClose: () => void;
}

export interface ModalPropsType {
  closing: boolean;
}

export interface LoginModalProps {
  handleClose: () => void;
}

export interface LoginFormProps {
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  message?: string;
  value: string;
  isLoginMode: boolean;
  formSubmitHandler: (e: React.MouseEvent<HTMLFormElement>) => void;
}

export interface LoginBannerPropsType {
  isLoginMode: boolean;
  handleClose: () => void;
}

export interface SettingModalPropsType {
  handleClose: () => void;
}

export interface SelectedSettingOptionType {
  [key: string]: {
    isAvailable: boolean;
    isSelected: boolean;
  };
}

export interface SearchParams {
  searchParams: {
    code: string;
  };
}

export interface RegisterForm {
  userEmail: string;
}

export interface ResponseType {
  message: string;
}

export interface ChordImageData {
  id: number;
  keyId: number;
  chordId: number;
  version: number;
  theme: 'Dark' | 'White';
  imageUrl: string;
}
