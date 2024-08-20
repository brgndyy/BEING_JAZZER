import Input from '../_common/input/Input';
import { toggleInput, toggleLabel, toggleLabelChecked } from './themeToggleInput.css';

export interface ThemeToggleInputProps {
  darkTheme: boolean;
  handleToggleTheme: () => void;
}

export default function ThemeToggleInput({ darkTheme, handleToggleTheme }: ThemeToggleInputProps) {
  return (
    <>
      <Input
        variant="default"
        type="checkbox"
        id="darkmodeToggle"
        className={toggleInput}
        onChange={handleToggleTheme}
      />
      <label
        htmlFor="darkmodeToggle"
        className={`${toggleLabel} ${darkTheme ? toggleLabelChecked : ''}`}
      />
    </>
  );
}
