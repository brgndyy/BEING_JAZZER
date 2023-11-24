import { useEffect, useState } from 'react';
import { useSetAtom } from 'jotai';
import { themeAtom } from '@/_store/themeAtom';

export const useTheme = (currentTheme: string) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(currentTheme === 'dark');
  const setDarkMode = useSetAtom(themeAtom);

  useEffect(() => {
    setDarkMode(darkTheme);
  }, [darkTheme, setDarkMode]);

  const themeToggleHandler = async () => {
    const newTheme = !darkTheme;
    let theme;

    if (newTheme) {
      theme = 'dark';
    } else {
      theme = 'light';
    }

    setDarkTheme(newTheme);

    await fetch('/api/theme', {
      method: 'POST',
      body: JSON.stringify({ theme }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.body.setAttribute('data-theme', 'dark');
      } else {
        document.body.removeAttribute('data-theme');
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.body;
      const initialColorValue = root.style.getPropertyValue('--initial-color-mode');

      setDarkTheme(initialColorValue === 'dark');
    }
  }, []);

  return { darkTheme, themeToggleHandler };
};
