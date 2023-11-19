declare module 'types' {
  export interface HeaderPropsType {
    currentTheme: string;
  }

  export interface ThemeToggleInputType {
    darkTheme: boolean;
    themeToggleHandler: () => void;
  }
}
