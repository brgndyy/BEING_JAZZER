declare module 'types' {
  export interface HeaderPropsType {
    currentTheme: string;
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
    formSubmitHandler: (e: React.MouseEvent<HTMLFormElement>) => void;
    message?: string;
    emailRef: React.RefObject<HTMLInputElement>;
    isLoginMode: boolean;
  }

  export interface LoginBannerPropsType {
    isLoginMode: boolean;
    handleClose: () => void;
  }

  export interface SettingModalPropsType {
    handleClose: () => void;
  }
  export interface OptionConfigPropsType {
    type: string;
    config: { [key: string]: boolean | undefined };
  }

  type Input = {
    value: string | undefined;
    isValid: boolean;
  };

  export interface Inputs {
    [key: string]: Input;
  }

  export interface State {
    inputs: Inputs;
    isValid: boolean;
  }

  export interface Action {
    type: 'INPUT_CHANGE';
    inputId: string;
    value: string;
    isValid: boolean;
  }

  export interface ResponseType {
    message: string;
  }
}
