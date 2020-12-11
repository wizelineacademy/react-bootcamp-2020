import styled from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';

// THEMING
export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },

  transitions: {
    duration: {
      standard: 500,
    },
  },
});

export const lightTheme = createMuiTheme({
  transitions: {
    duration: {
      standard: 500,
    },
  },
});

// COMPONENTS

export const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  height: 10%;
`;

export const Typography = styled.p``;
