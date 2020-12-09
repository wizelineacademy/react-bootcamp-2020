import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  
  a {
    color: ${({ theme }) => theme.text};
  }
  
  h1, h2 {
    color: ${({ theme }) => theme.text};
  }

  .grid-item {
    background: ${({ theme }) => theme.cardBackground};;
  }
  
  .title-container div {
    color: ${({ theme }) => theme.text};
  }
  
  .title-row div {
    color: ${({ theme }) => theme.text};
  }
  
  .description-container p {
    color: ${({ theme }) => theme.descriptionColor};
  }
  `;
