import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

const ThemeContext = React.createContext();

export const darkTheme = {
  backgroundColor: '#333333',
  textColor: '#000000',
  primary: '#424242;',
  secondary: 'white',
};

export const lightTheme = {
  backgroundColor: '#e0e0e0',
  textColor: '#ffffff',
  primary: '#1c5476;',
  secondary: 'white',
};

function LocalThemeProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    setIsDarkTheme(true);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        setIsDarkTheme,
      }}
    >
      <ThemeProvider theme={!isDarkTheme ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
export default LocalThemeProvider;
