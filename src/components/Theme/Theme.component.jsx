import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useAppDataContext } from '../../providers/AppData';
import actions from '../../state/actions';
import darkTheme from '../../utils/Themes/darkTheme';
import lightTheme from '../../utils/Themes/lightTheme';
import generalTheme from '../../utils/Themes/generalTheme';
import { GlobalStyles } from "./Theme.styles";

import { DARK_THEME, LIGHT_THEME, PREFERED_THEME } from '../../utils/constants';
import { storage } from '../../utils/storage';

const SYSTEM_SCHEME_STRING = '(prefers-color-scheme: dark)';

const chooseTheme = ({theme}) => {
  if (theme === LIGHT_THEME) {
    return { ...generalTheme, ...lightTheme }
  } else {
    return { ...generalTheme, ...darkTheme }
  }

}

export default function Theme({ children }) {
  const { state, dispatch } = useAppDataContext();

  useEffect(() => {
    if (!storage.get(PREFERED_THEME)) {
      if (window.matchMedia && window.matchMedia(SYSTEM_SCHEME_STRING).matches) {
        dispatch({ type: actions.SET_THEME, payload: DARK_THEME });
      } else {
        dispatch({ type: actions.SET_THEME, payload: LIGHT_THEME });
      }
    } else {
      dispatch({ type: actions.SET_THEME, payload: storage.get(PREFERED_THEME) });
    }
    window.matchMedia(SYSTEM_SCHEME_STRING).addEventListener('change', (e) => {
      dispatch({
        type: actions.SET_THEME,
        payload: e.matches ? DARK_THEME : LIGHT_THEME,
      });
    });
  }, [dispatch]);

  return (
    <ThemeProvider theme={chooseTheme(state)}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
