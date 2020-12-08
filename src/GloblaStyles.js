import { createGlobalStyle } from 'styled-components';

export const theme = {
  light: {
    primary: '#ffffff',
    secondary: '#f9f9f9',
  },
  dark: {
    primary: '#222',
    secondary: '#181818',
    tertiary: '#111',
    quaternary: '#333',
    quinary: '#444',
    senary: '#555',
    textPrimary: '#fefefe',
    textSecondary: '#ddd',
    textTertiary: '#bbb',
    textQuaternary: '#aaa',
    textQuinary: '#888',
    textSenary: '#666',
    link: '#77f',
  },
};

export const GlobalStyle = createGlobalStyle`

body {
    /* overflow-y: scroll; */
    overflow-y: none;
  }
  
body, html, #root {
    height: 100%;
    background-color: ${(props) => props.theme.secondary}
  }
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  border: 0;
  outline: 0;

  font-family: "Roboto", sans-serif;
}

:root {
    --primary: ${(props) => props.theme.primary};
    --secondary: ${(props) => props.theme.secondary};
    --tertiary: ${(props) => props.theme.tertiary};
    --quaternary: ${(props) => props.theme.quaternary};
    --quinary: ${(props) => props.theme.quinary};
    --senary: ${(props) => props.theme.senary};
    
    --text-primary: ${(props) => props.theme.textPrimary};
    --text-secondary: ${(props) => props.theme.textSecondary};
    --text-tertiary: ${(props) => props.theme.textTertiary};
    --text-quaternary: ${(props) => props.theme.textQuaternary};
    --text-quinary: ${(props) => props.theme.textQuinary};
    --text-senary: ${(props) => props.theme.textSenary};


    --text-link: ${(props) => props.theme.link};
    transition: 0.4s;
}

`;
