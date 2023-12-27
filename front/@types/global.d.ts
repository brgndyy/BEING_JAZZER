declare module 'types' {
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

  export interface HeaderPropsType {
    currentTheme: string;
    userInfo: UserInfoType;
    chordSetting: ChordSetting[];
    accessToken?: string;
  }

  export interface UserProfilePropsType {
    userInfo: UserInfoType;
  }

  export interface ThemeToggleInputType {
    darkTheme: boolean;
    themeToggleHandler: () => void;
  }

  export interface BackDropPropsType {
    handleClose: () => void;
  }

  export interface ModalPropsType {
    closing: boolean;
  }

  export interface LoginModalPropsType {
    handleClose: () => void;
  }

  export interface LoginModeTogglePropsType {
    isLoginMode: boolean;
    loginModeHandler: () => void;
  }

  export interface LoginFormPropsType {
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
  export interface OptionConfigPropsType {
    type: string;

    config: {
      [key: string]: {
        isAvailable: boolean;
        isSelected: boolean;
      };
    };
    handleSelectedUserSettingConfig: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

  export interface SearchParamsType {
    searchParams: {
      code: string;
    };
  }

  export interface RegisterFromPropsType {
    userEmail: string;
  }

  export interface ResponseType {
    message: string;
  }

  export interface MetronomeContextType {
    bpm: number;
    bpmChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    bpmBlurHandler: () => void;
    keyDownHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    focusHandler: () => void;
    blur: boolean;
    bpmRef: React.RefObject<HTMLInputElement>;
    metronomePlayHandler: () => void;
    count: number;
    first: boolean;
    playingModeHandler: () => void;
    isPlaying: boolean;
  }
}
