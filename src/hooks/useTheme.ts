import { useEffect } from 'react';
import { usePersistedState } from './usePersistedState';

function updateHTML() {
  const currentLocalStorageTheme = localStorage.getItem('theme')
    ? JSON.parse(localStorage.getItem('theme') || '')
    : '';

  const isLocalStorageDark = currentLocalStorageTheme === 'dark';
  const missingLocalStorageTheme = !('theme' in localStorage);

  const userPrefersDarkTheme = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;

  const useDark =
    isLocalStorageDark || (missingLocalStorageTheme && userPrefersDarkTheme);

  document.documentElement.classList.add(useDark ? 'dark' : 'light');
  document.documentElement.classList.remove(!useDark ? 'dark' : 'light');
}

export function useTheme() {
  const [theme, setTheme] = usePersistedState('theme', 'system');

  function toggleTheme() {
    switch (theme) {
      case 'system':
        setTheme('dark');
        break;
      case 'dark':
        setTheme('light');
        break;
      case 'light':
        setTheme('dark');
        break;
    }
  }

  useEffect(() => {
    updateHTML();
  }, [theme]);

  return { theme, toggleTheme };
}
