import React from 'react';

export const themes = {
  light: 'text-dark bg-light',
  dark: 'text-light bg-dark',
};

export const ThemeContext = React.createContext(themes.light);
