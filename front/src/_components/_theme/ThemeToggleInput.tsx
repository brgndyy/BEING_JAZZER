import { toggleInput, toggleLabel, toggleLabelChecked } from './themeToggleInput.css';
import { ThemeToggleInputProps } from '@/_types/index';

export default function ThemeToggleInput({ darkTheme, themeToggleHandler }: ThemeToggleInputProps) {
  return (
    <>
      <input
        type="checkbox"
        id="darkmodeToggle"
        className={toggleInput}
        onChange={themeToggleHandler}
      />
      <label
        htmlFor="darkmodeToggle"
        className={`${toggleLabel} ${darkTheme ? toggleLabelChecked : ''}`}
      />
    </>
  );
}
