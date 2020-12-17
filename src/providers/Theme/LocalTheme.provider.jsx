import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

const ThemeContext = React.createContext();

export const darkTheme = {
  primary: '#424242;',
  secondary: 'white',
  variant: '#848484',
  contrast: '#222222',
  highBackground: '#424242;',
  textcolor: 'white',
};

export const lightTheme = {
  primary: '#1c5476;',
  secondary: 'white',
  variant: '#7698ac',
  contrast: '#ffffff',
  highBackground: '#ffffff;',
  textcolor: 'black',
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
