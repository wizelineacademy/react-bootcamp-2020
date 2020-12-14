/* eslint-disable */
import React from 'react';
import { render } from '@testing-library/react';
import { Grid, H1, Container } from './FavoritesPage.styles';

describe('Testing Styled Components on FavoritesPage Component', () => {
  test('Should render the Grid component without crashing', () => {
    render(<Grid />);
  });
  test('Should render the H1 component without crashing', () => {
    render(<H1 />);
  });
  test('Should render the Container component without crashing', () => {
    render(<Container />);
  });
});
