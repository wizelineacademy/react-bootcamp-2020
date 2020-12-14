import React, { useReducer, createContext, useContext } from 'react';

import { initialState, ThemeReducer } from './Reducer';
import { setThemeAction } from './Actions';

const ThemeContext = createContext(null);

function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(`Error!`);
  }
  return context;
}

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  const value = {
    isLightTheme: state.isLightTheme,
    theme: state.theme,
    setTheme: setThemeAction(dispatch),
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export { useThemeContext };
export default ThemeProvider;
