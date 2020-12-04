import { createMuiTheme } from '@material-ui/core/styles';

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#8559da',
      main: '#7b1fa2',
      dark: '#140078',
      contrastText: '#fff',
    },
    secondary: {
      light: '#5efc82',
      main: '#00c853',
      dark: '#009624',
      contrastText: '#000',
    },
    background: {
      default: '#fff',
    },
    error: {
      main: '#b71c1c',
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#7b1fa2',
    },
    secondary: {
      main: '#00c853',
    },
    error: {
      main: '#b71c1c',
    },
  },
});
