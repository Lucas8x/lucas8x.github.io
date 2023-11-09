import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { useTheme } from '../hooks/useTheme';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="text-2xl text-stone-600 hover:text-black dark:text-white dark:hover:text-cyan-500"
      onClick={toggleTheme}
    >
      {theme === 'dark' ? <BsFillMoonStarsFill /> : <BsSunFill />}
    </button>
  );
}
