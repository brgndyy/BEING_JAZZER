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

  export interface SettingModalPropsType {
    handleClose: () => void;
  }
  export interface OptionConfigPropsType {
    type: string;
    config: { [key: string]: boolean | undefined };
  }
}
