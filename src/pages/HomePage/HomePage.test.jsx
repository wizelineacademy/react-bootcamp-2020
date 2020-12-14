/* eslint-disable */
import React from 'react';
import { render } from '@testing-library/react';
import { Grid } from './HomePage.styles';

describe('Testing Styled Components on HomePage Component', () => {
  test('Should render the Grid component without crashing', () => {
    render(<Grid />);
  });
});
