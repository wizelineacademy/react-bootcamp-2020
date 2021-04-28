import { useEffect, useState } from 'react';

const useDarkMode = (mode) => {
  const [theme, setTheme] = useState(mode);
  const colorTheme = theme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);
  return [colorTheme, setTheme];
};

export default useDarkMode;
