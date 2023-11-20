import React from 'react';
import { ThemeToggleInputType } from 'types';
import { toggleInput, toggleLabel, toggleLabelChecked } from './themeToggleInput.css';

export default function ThemeToggleInput({ darkTheme, themeToggleHandler }: ThemeToggleInputType) {
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
