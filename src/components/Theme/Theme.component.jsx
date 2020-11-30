import React, { useEffect } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useAppDataContext } from '../../providers/AppData';
import actions from '../../state/actions';
import darkTheme from '../../utils/Themes/darkTheme';
import lightTheme from '../../utils/Themes/lightTheme';
import generalTheme from '../../utils/Themes/generalTheme';

import { DARK_THEME, LIGHT_THEME, PREFERED_THEME } from '../../utils/constants';
import { storage } from '../../utils/storage';
const SYSTEM_SCHEME_STRING = '(prefers-color-scheme: dark)';

const GlobalStyles = createGlobalStyle`


*{
   box-sizing:border-box;
   font-family: ${(props) => props.theme.fontFamily};


}
  body {
     margin: 0;
     padding: 0;
    text-decoration: none;
    background-color: ${(props) => props.theme.bg};
    transition: 0.5s;
    outline: none;
    color: ${(props) => props.theme.text};

  }
`;


export default function Theme({ children }) {
  const { state, dispatch } = useAppDataContext();


  useEffect(() => {
    if (!storage.get(PREFERED_THEME)) {
      if (
        window.matchMedia &&
        window.matchMedia(SYSTEM_SCHEME_STRING).matches
      ) {
        dispatch({ type: actions.SET_THEME, payload: DARK_THEME });
      } else {
        dispatch({ type: actions.SET_THEME, payload: LIGHT_THEME });
      }

    } else {
      dispatch({ type: actions.SET_THEME, payload: storage.get(PREFERED_THEME) });
    }
    window
    .matchMedia(SYSTEM_SCHEME_STRING)
    .addEventListener('change', (e) => {
      dispatch({ type: actions.SET_THEME, payload: e.matches ? DARK_THEME : LIGHT_THEME });
    });
  }, [dispatch]);


  return (
    <ThemeProvider
      theme={
        state.theme === LIGHT_THEME
          ? { ...generalTheme, ...lightTheme }
          : { ...generalTheme, ...darkTheme }
      }
    >
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
