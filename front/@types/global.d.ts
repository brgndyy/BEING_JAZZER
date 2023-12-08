declare module 'types' {
  export interface ChordSetting {
    readonly id: number;
    readonly type: string;
    readonly config: { readonly [key: string]: boolean };
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
    [key: string]: boolean;
  }
  export interface OptionConfigPropsType {
    type: string;
    config: { [key: string]: boolean | undefined };
    handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    selectedSettingOption: SelectedSettingOptionType;
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
}
