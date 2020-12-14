import { createMuiTheme } from '@material-ui/core/styles';

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#9c4dcc',
      main: '#6a1b9a',
      dark: '#38006b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffa040',
      main: '#ff6f00',
      dark: '#c43e00',
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
      main: '#6a1b9a',
    },
    secondary: {
      main: '#ff6f00',
    },
    error: {
      main: '#b71c1c',
    },
  },
});
