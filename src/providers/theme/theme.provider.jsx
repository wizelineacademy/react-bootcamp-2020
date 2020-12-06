import React, { useReducer } from 'react';
import { ThemeProvider } from 'styled-components';
import themeReducer, { InitialState } from './theme.reducer';

const ThemeContext = React.createContext();

function LocalThemeProvider({ children }) {
  const [themeState, themeDispatch] = useReducer(themeReducer, InitialState);
  return (
    <ThemeContext.Provider
      value={{
        themeState,
        themeDispatch,
      }}
    >
      <ThemeProvider theme={themeState.theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
export default LocalThemeProvider;
