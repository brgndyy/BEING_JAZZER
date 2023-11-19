import React from 'react';
import { toggleInput, toggleLabel, toggleLabelChecked } from './themeToggleInput.css';
import { ThemeToggleInputType } from 'types';

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
