import ThemeActionTypes from './theme.types';

export const setTheme = (theme) => ({
  type: ThemeActionTypes.SET_THEME,
  payload: theme,
});
