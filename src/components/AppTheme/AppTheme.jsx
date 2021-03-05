import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import { useUserPreferences } from '../../providers/Preferences/UserPreferences.provider';
import Router from '../Router/Router';

function App() {
  const { theme } = useUserPreferences();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;
