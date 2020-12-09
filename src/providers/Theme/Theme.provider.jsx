import React, { useState, useContext, useCallback } from 'react';
import { storage } from '../../utils/storage';
import { THEME_KEY } from '../../utils/constants';

const ThemeContext = React.createContext(null);

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(`Can't use "useTheme" without an ThemeProvider!`);
  }
  return context;
}

function ThemeProviderContext({ children }) {
  const [theme, setTheme] = useState(storage.get(THEME_KEY) || 'light');

  const triggerSetTheme = useCallback((newTheme) => {
    setTheme(newTheme);
    storage.set(THEME_KEY, newTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ triggerSetTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { useTheme };
export default ThemeProviderContext;
