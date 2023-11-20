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
    modalHandler: () => void;
    closing: boolean;
    handleClose: () => void;
  }
}
