import { createGlobalStyle } from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';

// Component Styling
export const lightTheme = {
  bg: '#fff',
  text: '#121212',
};

export const darkTheme = {
  bg: '#121212',
  text: '#fff',
};

export const GlobalStyles = createGlobalStyle`
    body {
      color: ${(props) => props.theme.text};
      background-color: ${(props) => props.theme.bg};
      transition: 0.5s;
    }
   `;

export const typographyTheme = createMuiTheme({
  typography: {
    h6: {
      fontWeight: 600,
    },
  },
});
