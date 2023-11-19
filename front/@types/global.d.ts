declare module 'types' {
  export interface HeaderPropsType {
    currentTheme: string;
  }

  export interface ThemeToggleInputType {
    darkTheme: boolean;
    themeToggleHandler: () => void;
  }

  export interface ModalProps {
    modalHandler: () => void;
    closing: boolean;
    handleClose: () => void;
  }
}
